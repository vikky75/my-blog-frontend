import React from 'react';
import HomeNavBar from './HomeNavBar';

const Homepage = () => {
    return (
      <>
      <HomeNavBar/>
        <div className='homepage'>
           <h1>Welcome to the Blog App</h1> 
           <p>It’s not just the specifications that are changing, either. Much has been made of permutations to Google’s algorithms, which are beginning to favor better written, more authoritative content (and making work for the growing content strategy industry). Google’s bots are now charged with asking questions like, “Was the article edited well, or does it appear sloppy or hastily produced?” and “Does this article provide a complete or comprehensive description of the topic?,” the sorts of questions one might expect to be posed by an earnest college professor.
              This increased support for quality writing, allied with the book-like convenience and tactility of smartphones and tablets, means there has never been a better time for reading online. The remaining task is to make the writing itself a joy to read.</p>
        </div>
        </>
    );
};

export default Homepage;