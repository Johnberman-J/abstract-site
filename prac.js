class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(setBoard) {
        try {
            for(let i=0; i<this.boards.length; i++) {
                if(this.boards[i].boardName == setBoard.boardName) {
                    throw new Error();
                }
            }
            this.boards.push(setBoard);
        } catch {
            throw new Error();
        }
    }

    findBoardByName(getBoard) {
        for(let i=0; i<this.boards.length; i++) {
            if(this.boards[i].boardName == getBoard.boardName) {
                return this.boards[i];
            }
        }
    }
}

class Board {
    constructor(boardName) {
        try{
            if(!boardName || boardName == "") {
                throw new Error();
            }

            this.articles = [];
            this.boardName = boardName;
            this.checkBoard = false;

        } catch {
            throw new Error();
        } 
    }

    publish() {

    }

    getAllArticles() {

    }

}

class Article {
    constructor({subject, content, author}) {
        try {
            if(!subject || subject == "") {
                throw new Error();
            } else if(!content || content == "") {
                throw new Error();
            } else if(!author || author == "") {
                throw new Error();
            }

            this.comments = [];
            this.subject = subject;
            this.content = content;
            this.author = author;
            this.chkArticle = false;
            this.id;
            this.createdDate;
            // this.id = `${board.name}-${Math.random()}`;
            // this.createdDate = new Date().toISOString();
        } catch {
            throw new Error();
        }        
    }

    reply() {

    }    

    getAllComments() {

    }

}

class Comment {
    constructor({content, author}) {
        try{
            if(!content || content == "") {
                throw new Error();
            } else if(!author || author == "") {
                throw new Error();
            }

            this.content = content;
            this.author = author;
            this.createdDate;
            
        } catch {
            throw new Error();
        }
    }
}


const mySite = new Site();
console.log(mySite);

const boardName = "공지사항";
const firstBoard = new Board(boardName);
console.log(firstBoard);

const In_article = {subject: "아티클이란",content: "이거시아티클",author: "jason"};
const firstArticle = new Article(In_article);
console.log(firstArticle);

const In_comment = {content: "이거시코멘트",author: "jason"};
const firstComment = new Comment(In_comment);
console.log(firstComment);