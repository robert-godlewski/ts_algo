// Building a Trie data structure
class TrieNode {
    value: string | null;
    children: {[key: string]: TrieNode};
    constructor(value?: string) {
        this.value = (value===undefined ? null : value);
        this.children = {};
    };
};

class Trie {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    };

    insert(word: string): void {
        var cur: TrieNode | null = this.root;
        var subword: string = "";
        var i: number = 0;
        while (cur && i < word.length) {
            subword += word[i];
            if (!cur.children) {
                var temp: TrieNode = new TrieNode(subword);
                cur.children = {subword: temp}
            } else if (!cur.children[subword]) {
                cur.children[subword] = new TrieNode(subword);
            };
            i++;
            cur = cur.children[subword];
        };
    };

    // Word but bad because we need to use the startsWith function for each prefix/ subword
    search(word: string): boolean {
        var cur: TrieNode | null = this.root;
        var subword: string = "";
        var i: number = 0;
        while (cur && i < word.length) {
            subword += word[i];
            if (subword === word && cur.value === word) {
                return true;
            } else if (!cur.children) {
                return false;
            };
            i++;
            cur = cur.children[subword];
        };
        if (cur.value === word) {
            return true;
        } else {
            return false;
        };
    };

    // This is a bad solution
    startsWith(prefix: string): boolean {
        var cur: TrieNode | null = this.root;
        var subword: string = "";
        var i: number = 0;
        while (cur && i < prefix.length) {
            subword += prefix[i];
            if (subword === prefix && cur.value === prefix) {
                return true;
            } else if (!cur.children) {
                return false;
            };
            i++;
            cur = cur.children[subword];
        };
        if (cur.value === prefix) {
            return true;
        } else {
            return false;
        };
    };
};


export {TrieNode, Trie}