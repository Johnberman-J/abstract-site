class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(setBoard) {
        try {
            for(let board of this.boards) {
                if(board.boardName == setBoard.boardName) {
                    throw new Error();
                }
            }
            setBoard.chkBoard = true;
            this.boards.push(setBoard);
        } catch {
            throw new Error();
        }
    }

    findBoardByName(getBoard) {
        for(let board of this.boards) {
            if(board.boardName == getBoard) {
                return board;
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
            this.chkBoard = false;

        } catch {
            throw new Error();
        } 
    }

    publish(setArticle) {
        try {
            if(!this.chkBoard) {
                throw new Error();
            }
            setArticle.chkArticle = true;
            setArticle.id = `${this.boardName}-${Math.random()}`;
            setArticle.createdDate = new Date().toISOString();
            this.articles.push(setArticle);
        } catch {
            throw new Error();
        }
    }

    getAllArticles() {
        return this.articles;
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

        } catch {
            throw new Error();
        }        
    }

    reply(setComment) {
        try {
            if(!this.chkArticle) {
                throw new Error();
            }
            setComment.createdDate = new Date().toISOString();
            this.comments.push(setComment);
        } catch {
            throw new Error();
        }
    }    

    getAllComments() {
        return this.comments;
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

module.exports = {
    Site,
    Board,
    Article,
    Comment,
}