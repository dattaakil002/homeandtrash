import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HometrashserviceService {

  homelist:any = [
    {
      'productImage': 'https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&h=350',
      'productTitle': 'Nature1',
      'Description' : 'Environment Earth Day In The Hands Of Trees Growing Seedlings. Bokeh Green  Background Female Hand Holding Tree On Nature Field Gra Stock Image - Image  of fresh, global: 130247647'
    },
    {
      'productImage': 'https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&h=350',
      'productTitle': 'Nature2',
      'Description' : 'Environment Earth Day In The Hands Of Trees Growing Seedlings. Bokeh Green  Background Female Hand Holding Tree On Nature Field Gra Stock Image - Image  of fresh, global: 130247647'
    }
  ]
  constructor() { }

  

}
