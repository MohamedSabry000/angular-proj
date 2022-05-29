import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILogin } from './../ilogin';
import { UsersService } from './../user-service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: ILogin = { username: '', password: '' }
d=""
  constructor(private router: Router,private activeRoute: ActivatedRoute, private usersService: UsersService) { }

  login(userdata: ILogin) {

    const u = this.usersService.getUserByUserPass(userdata?.username, userdata?.password)
    u ? this.router.navigateByUrl('/user-details/'+u.id): console.log("no data")
  }


  ngOnInit(): void {
  }

}
