import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class CommentService {
    constructor(public httpClient: HttpClient) {

    }

    public getCommentList(postId: string, page: number = 1): Observable<any> {
        return this.httpClient.get(
            `http://localhost:9500/blog/comment/${postId}/page/${page}`
        );
    }

    public writeComment(comment: any): Observable<any> {
        return this.httpClient.post(
            `http://localhost:9500/blog/comment/write-comment`,
            comment,
            {
                headers: new HttpHeaders({
                    "Content-Type": "application/json"
                })
            }
        );
    }
}