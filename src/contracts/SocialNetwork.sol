pragma solidity ^0.5.0;

contract SocialNetwork {
    // State variable
    // value gets stored directly to the blockchain
    // name() getter automatically created
    string public name;
    // counter to increment post id
    uint public postCount = 0;

    // Constructor function
    // called only once whenever the smart contract is created
    constructor () public {
        name = "Tejas's First Smart Contract";
    }

    // Encapsulate a post object
    struct Post {
        uint id;
        string content;
        uint tipAmount;
        address payable author;
    }

    // Like a hashmap
    // public, so can get posts like posts()
    mapping(uint => Post) public posts;

    // public - can be called outside of the smart contract (tests / client side website)
    function createPost(string memory _content) public {
        // Validate there is no empty content
        // If it doesn't pass, execution halts
        require(bytes(_content).length > 0);

        postCount ++;

        // msg is a special variable that tells us the user who called the function
        posts[postCount] = Post(postCount, _content, 0, msg.sender);

        // trigger the event
        emit PostCreated(postCount, _content, 0, msg.sender);

        return 0;
    }

    // events external consumers can subscribe to
    event PostCreated(
        uint id,
        string content,
        uint tipAmount,
        address payable author
    );

    // payable - send ether to a contract
    function tipPost(uint _id) public payable {
        // Make sure the post exists (id is valid)
        require(_id > 0 && _id <= postCount);

        // Fetch the post
        Post memory _post = posts[_id];

        // Fetch the author
        address payable _author = _post.author;

        // Pay the author by sending them ether
        address(_author).transfer(msg.value);

        // Increment the tip amount
        _post.tipAmount = _post.tipAmount + msg.value;

        // Update the post
        posts[_id] = _post;

        emit PostTipped(postCount, _post.content, _post.tipAmount, _author);
    }

    event PostTipped(
    uint id,
    string content,
    uint tipAmount,
    address payable author
    );
}