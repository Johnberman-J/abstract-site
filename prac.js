class Site {
    constructor () {
        this.boards = [];
    };

    addBoard (Board) {
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

    findBoardByName (findName) {
        for(let i = 0; i<this.boards.length; i++) {
            if(this.boards[i]["boardName"]==findName) {
                return this.boards[i]
            }
        }
    };  
}

class Board extends Site {
    constructor (boardName) {
        try {
            if(boardName==null) {
                throw Error;
            } else if (boardName=="") {
                throw Error;
            }
            this.boardName = boardName;
        } catch {
            throw Error;
        }
    }

    publish (Article) {
        const existBoard = super.findBoardByName(this)
        try {
            if(!existBoard) {
                throw Error;
            }
            this.article = Article;
            
        } catch {
            throw Error;
        }
    }
}



const mySite = new Site();
const noticeBoard = new Board('공지사항');

console.log(noticeBoard)