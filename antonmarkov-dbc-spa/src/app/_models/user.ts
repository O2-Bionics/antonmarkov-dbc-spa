import { Photo } from './photo';
import { Url } from 'url';

export interface User {
    id: number;
    username: string;
    age: number;
    photoUrl: string;
    city: string;
    country: string;
    photos?: Photo[];
}
