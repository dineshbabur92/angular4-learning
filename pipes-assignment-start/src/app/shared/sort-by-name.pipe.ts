import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "sortByName",
	pure: true
}) 
export class SortByNamePipe implements PipeTransform{

	transform(value: {}[]): {}[]{
		return value.sort((a, b) => {return (a["name"] >= b["name"]) ? 1 : -1;})
	}

}