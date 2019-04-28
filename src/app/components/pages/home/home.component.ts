import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoppityPopComponent } from '../../nubs/poppitypop/poppitypop.component';
import projects from '../../../../assets/projects.json';


@Component({
    selector: 'home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class PageHomeComponent implements OnInit {
    @ViewChild(PoppityPopComponent) poppity: PoppityPopComponent;
    allProjects: object;
    selectedProject = {};

    constructor(
        private router: Router
    ) {
        console.log("٩(๑❛ᴗ❛๑)۶ Look at you - being sneaky and snoopin' all up in my console logs!");
        console.log("shibbles.io was made with love and built using Angular. :)");
    }

    ngOnInit() {

        console.log(projects);
        this.allProjects = projects.projects;

    }

    ////////////////////////////////
    viewProject(index) {

        this.poppity.showPoppity = true;
        this.selectedProject = this.allProjects[index];
        this.poppity.directiveRef.update();

    }

}