import { BendBaseComponent } from './bend-base.component';
export class BendBaseLangComponent extends BendBaseComponent {
    constructor(translate, langKeyService) {
        super();
        this.translate = translate;
        this.langKeyService = langKeyService;
    }
    ngOnInit() {
        super.prepareTranslate(this.translate, this.langKeyService);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuZC1iYXNlLWxhbmctY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmVuZC1jb3JlLXVpLyIsInNvdXJjZXMiOlsibGliL3ZpZXcvYmVuZC1iYXNlLWxhbmctY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBR3hELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxpQkFBaUI7SUFDMUQsWUFDVSxTQUEyQixFQUM1QixjQUE4QjtRQUNuQyxLQUFLLEVBQUUsQ0FBQztRQUZGLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzVCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUN6QixDQUFDO0lBRWYsUUFBUTtRQUNOLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM5RCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQge09uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QmVuZEJhc2VDb21wb25lbnR9IGZyb20gJy4vYmVuZC1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TGFuZ0tleVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvbGFuZy1rZXktc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmVuZEJhc2VMYW5nQ29tcG9uZW50IGV4dGVuZHMgQmVuZEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgbGFuZ0tleVNlcnZpY2U6IExhbmdLZXlTZXJ2aWNlXHJcbiAgKSB7IHN1cGVyKCk7ICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgc3VwZXIucHJlcGFyZVRyYW5zbGF0ZSh0aGlzLnRyYW5zbGF0ZSwgdGhpcy5sYW5nS2V5U2VydmljZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==