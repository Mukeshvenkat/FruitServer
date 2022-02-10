import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { FruitsComponent } from "./fruits/fruits.component";
import { FruitsResolverService } from "./fruit-resolver.service";

const routes: Routes = [
    {
        path: '', component: FruitsComponent, resolve: [FruitsResolverService]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}