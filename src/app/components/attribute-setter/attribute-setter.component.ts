// @angular
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
// external
import { faX } from '@fortawesome/free-solid-svg-icons';
// data
import { User } from '../../models/user.model';
// services
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'attribute-setter',
  templateUrl: './attribute-setter.component.html',
  styleUrls: ['./attribute-setter.component.scss'],
})
export class AttributeSetterComponent implements OnInit {
  // @Input() id?: number;
  user: User | undefined;
  xIcon = faX;
  isEmptyField: boolean = false;
  isLogoSpecs: boolean = false;
  close: boolean = false;

  @Output() newItemEvent = new EventEmitter<boolean>();


  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.usersService.getUser(id).subscribe((user) => (this.user = user));
  }

  disableSaveBtn(saveBtn: any): void {
    if (saveBtn !== null) {
      saveBtn.style.cursor = 'not-allowed';
      saveBtn?.setAttribute('disabled', 'true');
      saveBtn.style.color = 'rgb(188, 186, 186)';
      saveBtn.style.backgroundColor = '#dff0d8';
      // saveBtn.addEventListener(
      //   'mouseover',
      //   () => {
      //     console.log('not allowed hover');
      //     saveBtn.style.backgroundColor = 'red';
      //     const formButtons = document.querySelector('.form-buttons');
      //     const alertBox = document.createElement('div');
      //     alertBox.classList.add('alert-box');
      //     alertBox.innerHTML = 'No empty fields allowed!';
      //     formButtons?.appendChild(alertBox);
      //   },
      //   false
      // );
    }
  }

  styleDefaultSaveBtn(saveBtn: any): void {
    if (saveBtn !== null) {
      saveBtn.style.cursor = 'pointer';
      saveBtn?.removeAttribute('disabled');
      saveBtn.style.color = 'white';
      saveBtn.style.backgroundColor = 'blue';

      saveBtn.addEventListener(
        'mouseover',
        () => {
          saveBtn.style.backgroundColor = 'rgb(90, 90, 222)';
        },
        false
      );
      saveBtn.addEventListener(
        'mouseout',
        () => {
          saveBtn.style.backgroundColor = 'blue';
        },
        false
      );
      saveBtn.addEventListener(
        'focus',
        () => {
          saveBtn.style.backgroundColor = 'rgb(90, 90, 222)';
        },
        false
      );
      saveBtn.addEventListener(
        'focusout',
        () => {
          saveBtn.style.backgroundColor = 'blue';
        },
        false
      );
    }
  }

  emptyFieldCheck(input: String) {
    const saveBtn = document.getElementById('save');

    // if any field is empty
    if (
      input.trim() === '' ||
      this.user?.username.trim() === '' ||
      this.user?.name.trim() === '' ||
      this.user?.email.trim() === '' ||
      this.user?.company.name.trim() === ''
    ) {
      //then
      this.isEmptyField = true;
      this.disableSaveBtn(saveBtn);

      return;
    } else {
      // if all fields are filled
      this.isEmptyField = false;
      this.styleDefaultSaveBtn(saveBtn);

      return;
    }
  }

  save(): void {
    if (this.user) {
      this.usersService.updateUser(this.user).subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }

  closePopUp(): void {
  this.close = true;
  this.newItemEvent.emit(this.close);
  console.log("close "+this.close)
  }
}
