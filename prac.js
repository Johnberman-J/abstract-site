class Site {
    constructor () {
        this.addedBoardArray = [];
    };

    addBoard(Board) {
        try {
            if (this.addedBoardArray.length==0) {
                this.addedBoardArray.push({boardName : Board.boardName});
                return this.addedBoardArray[this.addedBoardArray.length-1];
            } else {
                if (this.boardName == Board.boardName) {
                    throw Error;
                } else {
                    this.addedBoardArray.push({boardName : Board.boardName});
                    return this.addedBoardArray;
                }
            }
        } catch {
            throw Error;
        }
    }
}

class Board {
    constructor (boardName) {
        this.boardName = boardName;
    }


    
}

const mySite = new Site();
const noticeBoard = new Board('공지사항');
const faqBoard = new Board('FAQ');

mySite.addBoard(noticeBoard);
mySite.addBoard(faqBoard);

console.log(noticeBoard)
console.log(mySite)