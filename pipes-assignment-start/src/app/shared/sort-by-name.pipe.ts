import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "sortByName",
	pure: false
}) 
export class SortByNamePipe implements PipeTransform{

	transform(value: {}[]): {}[]{
		return value.sort((a, b) => {return (a["name"] >= b["name"]) ? 1 : -1;})
	}

}