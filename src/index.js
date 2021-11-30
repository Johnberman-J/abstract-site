class Site {
    constructor () {
        this.boards = [];
    };

    addBoard(Board) {
        try {
            if (!this.boards.length) {
                this.boards.push({boardName : Board.boardName});
                return;
            } else {
                for(let i = 0; i<this.boards.length; i++) {
                    if(this.boards[i]["boardName"] == Board.boardName) {
                        throw Error;
                    }
                }
                this.boards.push({boardName : Board.boardName});
                return 
            }
        } catch {
            throw Error;
        }
    };

    findBoardByName(findName) {
        for(let i = 0; i<this.boards.length; i++) {
            if(this.boards[i]["boardName"]==findName) {
                return this.boards[i]
            }
        }
    };  
}

class Board {
    constructor (boardName) {
        this.boardName = boardName;
    }


    
}

class Article {
    constructor (subject, content, author) {
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
