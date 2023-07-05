import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/Services/user.service';
import { IUser } from 'src/tipado/Character';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  loading: boolean = false;

  users: IUser[] = [];
  userToEdit: IUser = null;
  userDetails: IUser = null;

  constructor(
    private _userService: UserService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      name: [],
      age: [],
      email: [],
      country: [],
    });
    this._loadUsers();
  }

  onAdd() {
    const user = this.form.value;
    this._userService.add(user).subscribe(() => {
      this._loadUsers();
      this.form.reset();
      alert('User registered successfully!');
    });
  }
  onPrepareEdit(data: IUser) {
    this.userToEdit = data;
    this.form.patchValue(data);
  }
  onEdit() {
    const user = this.form.value;

    if (this.userToEdit) {
      this._userService.update(this.userToEdit.id, user).subscribe(() => {
        this._loadUsers();
        alert('User edited successfully!');
        this.form.reset();
        this.userToEdit = null;
      });
    }
  }

  onDetails(id: string) {
    this._userService
      .getById(id)
      .subscribe((data) => (this.userDetails = data));
  }

  private _loadUsers() {
    this.loading = true;
    this._userService.getAll().subscribe(
      (data) => {
        this.users = data;
        this.loading = false;
      },
      () => (this.loading = false)
    );
  }

  onDelete(id: string) {
    const isConfirmed = confirm('Are you sure to delete this user');
    if (isConfirmed) {
      this._userService.delete(id).subscribe(() => {
        this._loadUsers();
        alert('User deleted successfully!');
      });
    }
  }
}
