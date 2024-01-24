import {Injectable} from "@angular/core";
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: "root"
})
export class ToastService {
  constructor(private messageService: MessageService){

  }

  addSuccessMessageForAction(action:string){
    this.messageService.add({
      severity: "success",
      summary: "Erfolg",
      detail: 'Mitarbeiter/in erfolgreich ${action}'
    })
  }

  addErrorMessageForAction(action:string, errorMessage: string){
    this.messageService.add({
      severity: "error",
      summary: 'Fehler beim ${action}',
      detail: errorMessage
    })
  }

}
