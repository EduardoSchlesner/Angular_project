// filter-by-description.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos: Photo[], descriptionQuery: string) {
    // Garante que a busca seja case-insensitive e sem espaços extras
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    if (descriptionQuery) {
      return photos.filter(photo =>
        photo.description.toLowerCase().includes(descriptionQuery)
      );
    } else {
      // Se não houver texto na busca, retorna a lista original
      return photos;
    }
  }
}
