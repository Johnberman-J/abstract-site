class Site {
    constructor () {
        this.boards = [];
    };

    addBoard (Board) {
        try {
            if (!this.boards.length) {
                Board.chkBoard = true;
                this.boards.push({boardName : Board.boardName, chkBoard: Board.chkBoard});
                return;
            } else {
                for(let i = 0; i<this.boards.length; i++) {
                    if(this.boards[i]["boardName"] == Board.boardName) {
                        throw new Error();
                    }
                }
                Board.chkBoard = true;
                this.boards.push({boardName: Board.boardName, chkBoard: Board.chkBoard});
                return 
            }
        } catch {
            throw new Error();
        }
    };

    findBoardByName (findName) {
        for(let i = 0; i<this.boards.length; i++) {
            if(this.boards[i]["boardName"]==findName) {
                return this.boards[i];
            }
        }
    };  
}

class Board {
    constructor (boardName) {
        try {
            if(boardName==null) {
                throw Error;
            } else if (boardName=="") {
                throw Error;
            }
            this.boardName = boardName;
            this.chkBoard = false;
        } catch {
            throw Error;
        }
    }

    publish (Article) {
        try {
            if(!this.chkBoard) {
                throw Error;
            }
            this.article = Article;           
        } catch {
            throw Error;
        }
    }
}

class Article {
    constructor ({ subject, content, author }) {
        this.subject = subject;
        this.content = content;
        this.author = author;
    }
}

class Comment {
    constructor (content, author) {
        this.content = content;
        this.author = author;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
