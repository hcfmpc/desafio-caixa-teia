import { Observable } from 'rxjs';

export default interface IHttp {
	get(endPoint: string, options?: any): Observable<any>;
	post (endPoint: string, body: any, options?: any): Observable<any>;
	put (endPoint: string, body: any, options?: any): Observable<any>;
	delete (endPoint: string, options?: any): Observable<any>;
}
