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
                selectedBoard.chkBoard = true;
                selectedBoard.articles = this.boards.articles;
                return selectedBoard;   // Board 객체를 반환해야 다음번에 function을 사용 할 수 있다.
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
            Article.chkArticle = true;
            return Article;
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
            this.chkArticle = false;
            this.id = "";
            this.createDate = "";
            this.comment = [];
        } catch {
            throw new Error();
        }
    }

    reply(addComment) {
        try {
            if(!this.chkArticle) {
                throw new Error();
            }
            this.comment.push(addComment);
            addComment.createdDate = new Date().toISOString();
        } catch {
            throw new Error();
        }
    }

    getAllComments() {
        return this.comment;
    }
}

class Comment {
    constructor ({content, author}) {
        try {
            if(!content || content == "") {
                throw new Error();
            } else if(!author || author=="") {
                throw new Error();
            }
            this.content = content;
            this.author = author;
            // this.createdDate = "";
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
};

mySite = new Site();
const noticeBoard = new Board('공지사항');
mySite.addBoard(noticeBoard);

const article = new Article({
subject: '첫번째 공지사항입니다.',
content: '테스트 코드는 수정하면 안됩니다.',
author: '강승현',
});

noticeBoard.publish(article);

const findingBoard = mySite.findBoardByName('공지사항');
console.log(findingBoard);
const [articles] = findingBoard.getAllArticles();

console.log([articles])


