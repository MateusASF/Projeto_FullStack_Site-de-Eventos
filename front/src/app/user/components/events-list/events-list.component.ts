import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventModel } from 'src/app/admin/models/event.model';
import { EventsService } from 'src/app/admin/service/adm-events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {
  public get eventsService(): EventsService {
    return this._eventsService;
  }
  public set eventsService(value: EventsService) {
    this._eventsService = value;
  }

  public events$!: Observable<EventModel[]>;
  public events!: EventModel[];

  constructor(
    private _eventsService: EventsService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.getEventsList();
  }

  public getEventsList ():void {
    this.events$ = this.eventsService.getEventsList()
    this.events$.subscribe({next: (event: EventModel[]) => {
      this.events = event} })
  }

  public reservation (id: string): void {
    this.router.navigate([`/user/reservation/${id}`])
  }
}
