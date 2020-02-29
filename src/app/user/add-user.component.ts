import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from './user.service';

@Component( {
    templateUrl: './add-user.component.html'
} )
export class AddUserComponent {

    user: User = new User();
    selectedFiles: FileList;

    constructor( private router: Router, private userService: UserService ) {

    }

    selectFile( event ) {
        const file = event.target.files.item( 0 );

        if ( file.type.match( 'image.*' ) ) {
            var size = event.target.files[0].size;
            if ( size > 1000000 ) {
                alert( "size must not exceeds 1 MB" );
            }
            else {
                this.selectedFiles = event.target.files;
            }
        } else {
            alert( 'invalid format!' );
        }

    }

    createUser(): void {
        this.userService.createUser( this.user )
            .subscribe( data => {
                alert( "User created successfully." );
            } );

    };

}
