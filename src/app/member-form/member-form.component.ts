import { Member } from './../../modals/Member';
import { MemberService } from './../../service/member.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  constructor(private MS: MemberService, private router: Router, private activatedRoute: ActivatedRoute) { }
  form!: FormGroup;
  currentItemID!: string;//! inisialiser al null
  member_recuper!: Member;

  ngOnInit(): void // tetcharja 9bal l constructeur leur de chargement de composant tta3mel refrech wa7adha
  {
    //1.recuperer la route active 
    //snapshot capture d'image sur l url en des petits fragment o tlawej aliha fil url bil params
    //2.extaraire la valeur de id depuis l url
    this.currentItemID = this.activatedRoute.snapshot.params['id'];
    if (!!this.currentItemID) {
      this.MS.getMemberbyId(this.currentItemID).then((x) => {
        this.member_recuper = x;
        this.initForm2(x)

      })
      //3.si id existe
      //get bech na3tyh l id yaa3ty l memeber
      //getMemberbyId(id)=>memeber
    }
    else { this.initForm(); }//fonction qui initialise le formulaire a null

    // je suis dans edit =>initialiser le formulaire al member

    //sinon je suis dans create =>this.initForm()
  }

  //way loula min form lil html
  initForm(): void {
    this.form = new FormGroup({//form control louwel t3mel intialiser al champ o champs 2 behc yraja3 wela ( champs requi)
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
    })
  }
  initForm2(x: Member): void {
    this.form = new FormGroup({//form control louwel t3mel intialiser al champ o champs 2 behc yraja3 wela ( champs requi)
      cin: new FormControl(x.cin, [Validators.required]),
      name: new FormControl(x.name, [Validators.required]),
      cv: new FormControl(x.cv, [Validators.required]),
      type: new FormControl(x.type, [Validators.required]),
    })
  }

  onsub(): void {
    console.log(this.form.value);//formulaire kemle ken theb kol wahda wahadha form.value.cin form.value.name
    //const MemberTosave = this.form.value;
    const MemberTosave = {...this.member_recuper,...this.form.value};
    //fer8a 5ater void
    //router erreur na3melo injection fil constructeur
    this.MS.saveMember(MemberTosave).then(() => {
      this.router.navigate(['/members']);

    })
  }

}
