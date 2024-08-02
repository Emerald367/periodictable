import {Component} from '@angular/core'


@Component({
    selector: 'intro-section',
    standalone: true,
    template: 
    `<div class="bg-gradient-to-r from-green-400 to-cyan-300 inline-block text-transparent bg-clip-text text-5xl font-mont pt-2 mb-3 animate-fade">
        Welcome to the Element Explorer!
    </div>
    <div class="text-white text-3xl font-mont pt-10 animate-fade mb-10">
        <span class="bg-gradient-to-r from-green-400 to-cyan-300 text-transparent bg-clip-text"> Explore </span> and learn about any <span class="bg-gradient-to-r from-green-400 to-cyan-300 text-transparent bg-clip-text"> Element </span> you want with this fully custom <span class="bg-gradient-to-r from-green-400 to-cyan-300 text-transparent bg-clip-text"> Periodic Table! </span>
    </div>
    `
    ,
    styles: []
})
export class IntroSection {

}