import { Component } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector: "app-recipe-list",
    templateUrl: "./recipe-list.component.html",
    styleUrls: ["./recipe-list.component.scss"],
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe(
            "Recipe name",
            "tempora deleniti perspiciatis",
            "https://www.washingtonpost.com/resizer/Pe7Hg4fj0Cz3Xku6jLJifrinqBI=/arc-anglerfish-washpost-prod-washpost/public/7IWJ5M6V5GVS7UWUNK7VQ7ZE4Y.jpg"
        ),
        new Recipe(
            "Recipe name",
            "tempora deleniti perspiciatis",
            "https://www.washingtonpost.com/resizer/Pe7Hg4fj0Cz3Xku6jLJifrinqBI=/arc-anglerfish-washpost-prod-washpost/public/7IWJ5M6V5GVS7UWUNK7VQ7ZE4Y.jpg"
        ),
    ];
}
