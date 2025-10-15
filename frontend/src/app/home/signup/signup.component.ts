import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SignupService} from './signup.service';
import {NewUser} from './new-user';
import {lowerCaseValidator} from '../../shared/validators/lower-case.validator';
import {UserNotTakenValidatorService} from './user-not-taken.validator.service';

@Component({
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private router: Router,
    private userNotTakenValidatorService: UserNotTakenValidatorService
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userName: ['',
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ],
        // validador assíncrono!!!
        this.userNotTakenValidatorService.checkUserNameTaken()
      ]
    });
  }
  register() {
    if (this.signupForm.valid) {
      const newUser = this.signupForm.getRawValue() as NewUser;

      this.signupService
        .register(newUser)
        .subscribe({
          next: () => {
            alert('Usuário cadastrado com sucesso!');
            this.router.navigate(['']);
          },
          error: (err) => {
            console.log(err);
            this.signupForm.reset();
            alert('Erro ao cadastrar. Tente novamente. Verifique se o usuário ou email já existem.');
          }
        });
    } else {
      alert('Formulário inválido!');
    }
  }
}
