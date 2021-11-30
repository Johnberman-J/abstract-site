class Site {
    constructor () {
        this.boards = [];
    };

    addBoard (Board) {
        try {
            if (!this.boards.length) {
                Board.chkBoard = true;
                this.boards.push({
                    boardName : Board.boardName, 
                    chkBoard: Board.chkBoard, 
                    articles: [],
                    });
                return;
            } else {
                for(let i = 0; i<this.boards.length; i++) {
                    if(this.boards[i]["boardName"] == Board.boardName) {
                        throw new Error();
                    }
                }
                Board.chkBoard = true;
                this.boards.push({
                    boardName : Board.boardName, 
                    chkBoard: Board.chkBoard,
                    articles: [], 
                    });
                return 
            }
        } catch {
            throw new Error();
        }
    };

    findBoardByName (findName) {
        for(let i = 0; i<this.boards.length; i++) {
            if(this.boards[i]["boardName"]==findName) {
                const selectedBoard = new Board(findName);
                return selectedBoard;
            }
        }
    };  
}

class Board {
    constructor (boardName) {
        try {
            if(boardName==null) {
                throw new Error();
            } else if (boardName=="") {
                throw new Error();
            }
            this.boardName = boardName;
            this.chkBoard = false;
            this.articles = [];
        } catch {
            throw new Error();
        }
    }

    publish (Article) {
        try {
            if(!this.chkBoard) {
                throw new Error();
            }
            this.articles.push(Article);
            Article.id = `${this.boardName}-${Math.random()}`;
            Article.createdDate = new Date().toISOString();
        } catch {
            throw new Error();
        }
    }

    getAllArticles() {
        return this.articles;
    }
}

class Article {
    constructor ({ subject, content, author }) {
        try {
            if(!subject || subject =="") {
                throw new Error();
            } else if(!content || content == "") {
                throw new Error();
            } else if(!author || author == "") {
                throw new Error();
            }
            this.subject = subject;
            this.content = content;
            this.author = author;
        } catch {
            throw new Error();
        }
        
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


const mySite = new Site();
const noticeBoard = new Board('공지사항');

mySite.addBoard(noticeBoard);

console.log(mySite.findBoardByName("공지사항"));