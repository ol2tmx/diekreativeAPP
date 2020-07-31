import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChurchapiService {


  private REST_API_SERVER = "http://ec2-18-184-42-189.eu-central-1.compute.amazonaws.com/api";
  private AJAX_API_SERVER = "http://ec2-18-184-42-189.eu-central-1.compute.amazonaws.com/index.php?";

  private CALENDARROOT = "q=churchcal/ajax&func=";


  constructor(private httpClient: HttpClient) { }

  public login(username, password){
    var params = new HttpParams()
                    .set('username',username)
                    .set('password',password)
    return this.sendRestPostRequest('login',params);
  }

  public getCalendarEventsByCategory(category){
    return this.callCalendarMethods(category)
  }

  private callCalendarMethods(category){
    var params = new HttpParams()
                    .set('category_ids[]',category)
    return this.sendAjaxPostRequest(this.CALENDARROOT, "getCalPerCategory",params)
  }

  private sendAjaxPostRequest(requestroot, func, params:HttpParams){
    return this.httpClient.post(this.AJAX_API_SERVER+requestroot+func,{},{params});
  }

  private sendRestPostRequest(request:string,params:HttpParams){
    
  console.log(this.REST_API_SERVER+'/'+request+" "+params)
  //return this.httpClient.post(this.REST_API_SERVER+'/'+request,{},{params});
  return this.httpClient.post("http://ec2-18-184-42-189.eu-central-1.compute.amazonaws.com/api/login?username=admin&password=admin",{});
  }




}
