//Qoute Generator 
// Array of Jokes
var Quotes = [
["Mathematics is less related to accounting than it is to philosophy.","Leonard Adleman"],
["What if everything is an illusion and nothing exists? In that case, I definitely overpaid for my carpet.","Woody Allen"],
["If you don't like your analyst, see your local algebraist!","Gert Almkvist"],
["You can only be truly accomplished at something you love. Don't make money the goal. Instead, pursue the things you love doing, and do them so well that people can't take their eyes off you. All the other tangible rewards will come as a result.","Maya Angleou"],
["Probable impossibilities are to be preferred to improbable possibilities.","Aristotle"],
["It is my experience that proofs involving matrices can be shortened by 50% if one throws the matrices out.","E. Artin (Geometric Algebra, p. 14)"],
["If things are nice there is probably a good reason why they are nice: and if you do not know at least one reason for this good fortune, then you still have work to do.","Richard Askey"],
["In the broad light of day mathematicians check their equations and their proofs, leaving no stone unturned in their search for rigour. But, at night, under the full moon, they dream, they float among the stars and wonder at the miracle of the heavens. They are inspired. Without dreams there is no art, no mathematics, no life.","Michael Atiya (Notices of the AMS, 2010)"],
["Spending time with math people is a lot of fun. As a result of the play, I've had semi-drunken dinners with mathematicians all over the country. I recommend the experience.","David Auburn (playwright of Proof)"],
["The irreducible price of learning is realizing that you do not know.","James Baldwin"],
["This algorithm has been proved to work, but has never been observed to do so.","Alexander Barvinok"],
["Obvious is the most dangerous word in mathematics.","E. T. Bell"],
["The origins of graph theory are humble, even frivolous.","N. Biggs, E. K. Lloyd, and R. J. Wilson (Graph Theory: 1736-1936)"],
["Life is the twofold internal movement of composition and decomposition at once general and continuous.","Henri de Blainville"],
["There are two versions of math in the lives of many Americans: the strange and boring subject that they encountered in classrooms and an interesting set of ideas that is the math of the world, and is curiously different and surprisingly engaging. Our task is to introduce this second version to today's students, get them excited about math, and prepare them for the future.","Jo Boaler"],
["Mathematics as we know it and as it has come to shape modern science could never have come into being without some disregard for the dangers of the infinite.","David Bressoud (A radical approach to real analysis, MAA, 2007, p. 22)"],
["Logic moves in one direction, the direction of clarity, coherence and structure. Ambiguity moves in the other direction, that of fluidity, openness, and release. Mathematics moves back and forth between these two poles. [...] It is the interaction between these different aspects that gives mathematics its power.","William Byers (How Mathematicians Think, Princeton University Press, 2007)"],
["The essence of mathematics resides in its freedom.","Georg Cantor"],
["To ask the right question is harder than to answer it.","Georg Cantor"],
["To make a great dream come true, the first requirement is a great capacity to dream; the second is persistence.","Cesar Chavez"],
["A mathematician is a blind man in a dark room looking for a black cat which isn't there.","Charles R. Darwin"],
["The secret to education is respecting the pupil.","Ralph Waldo Emerson"],
["Mathematics compares the most diverse phenomena and discovers the secret analogies that unite them.","Jean Baptiste Joseph Fourier"],
["When I am working on a problem I never think about beauty. I only think about how to solve the problem. But when I have finished, if the solution is not beautiful, I know it is wrong.","Buckminster Fuller "],
["Everything you've learned in school as 'obvious' becomes less and less obvious as you begin to study the universe. For example, there are no solids in the universe. There's not even a suggestion of a solid. There are no absolute continuums. There are no surfaces. There are no straight lines.","Buckminster Fuller"],
["The purpose of computation is insight, not numbers.","Richard Hamming"],
["One good thing about teaching calculus is that you develop a hardened attitude towards repeating yourself.","Phil Hanlon"],
["The mathematician's patterns, like those of the painter's or the poet's, must be beautiful; the ideas, like the colours or the words, must fit together in a harmonious way.","Godfrey Harold Hardy"],
["The student of mathematics has to develop a tolerance for ambiguity. Pedantry can be the enemy of insight.","Gila Hanna (in David Tall (ed.), Advanced mathematical thinking)"],
["The whole purpose of education is to turn mirrors into windows.","Sydney J. Harris"],
["One of the big misapprehensions about mathematics that we perpetrate in our classrooms is that the teacher always seems to know the answer to any problem that is discussed. This gives students the idea that there is a book somewhere with all the right answers to all of the interesting questions, and that teachers know those answers. And if one could get hold of the book, one would have everything settled. That's so unlike the true nature of mathematics.","Leon Henkin"],
["I wrote a few papers on Koszul algebras, but I really don't understand the definition of Koszul algebras.","Takayuki Hibi"],
["Mathematics is an activity governed by the same rules imposed upon the symphonies of Beethoven, the paintings of DaVinci, and the poetry of Homer.","Edward Kasner and James Newman (Mathematics and the Imagination, Simon & Schuster, New York, 1940, p. 362)"],
["Mathematics is, in many ways, the most precious response that the human spirit has made to the call of the infinite.","Cassius J. Keyser"],
["The worst thing you can do to a problem is solve it completely.","Daniel Kleitman"]
["Science is what we understand well enough to explain to a computer, Art is all the rest.","Donald E. Knuth"],
["The greatest reward for a student is not a good grade. It is the willingness of his teacher to listen to him.","Nikolay Konstantinov"],
["Number theorists are like lotus-eaters--having tasted this food they can never give it up.","Leopold Kronecker (1823-1891)"],
["The imaginary number is a fine and wonderful resource of the human spirit, almost an amphibian between being and not being.","Gottfried Wilhelm Leibniz (1646-1716)"],
["Music is the pleasure the human mind experiences from counting without being aware that it is counting.","Gottfried Wilhelm Leibniz (1646-1716)"],
["Nature laughs at the difficulties of integration.","Pierre-Simon de Laplace"],
["I don't know where my ideas come from. I will admit, however, that one key ingredient is caffeine. I get a couple cups of coffee into me and weird things just start to happen.","Gary Larson (The Prehistory of The Far Side)"],
["Music is part of Number Theory. Nowadays when a number-theorist applies for a grant, he says that it is good for security, but in those days, way before America, he would say that it's good for music. I will not comment whether we have progressed...","Hendrik Lenstra"],
["Recreational number theory [...] is that part of number theory that is too difficult to study.","Hendrik Lenstra"],
["A math lecture without a proof is like a movie without a love scene. [pauses] This talk has two proofs.","Hendrik Lenstra"],
["A heavy warning used to be given that pictures are not rigorous; this has never had its bluff called and has permanently frightened its victims into playing for safety.","John Edensor Littlewood (1885-1977"],
["There is nothing as dreamy and poetic, nothing as radical, subversive, and psychedelic, as mathematics. It is every bit as mind blowing as cosmology or physics (mathematicians conceived of black holes long before astronomers actually found any), and allows more freedom of expression than poetry, art, or music (which depends heavily on properties of the physical universe). Mathematics is the purest of the arts, as well as the most misunderstood.","Paul Lockhart (A mathematician's lament)"],
["Education is the most powerful weapon which you can use to change the world.","Nelson Mandela"],
["Math is the only place where truth and beauty mean the same thing.","Danica McKellar"],
["For every problem, there is one solution which is simple, neat, and wrong.","H. L. Mencken (1880-1956)"],
["The [...] thing we evolutionary biologists don't do enough of [...] is make an emotional and moral case for the study of evolution. Last night, I concluded my talk with a quote from Dover, PA creationist school board member William Buckingham, who declared, 'Two thousand years ago someone died on a cross. Can't someone take a stand for him?' My response was, 'In the last two minutes, someone died from a bacterial infection. We take a stand for him.","Mike the Mad Biologist"],
["Mathematical study and research are very suggestive of mountaineering. Whymper made several efforts before he climbed the Matterhorn in the 1860's and even then it cost the life of four of his party. Now, however, any tourist can be hauled up for a small cost, and perhaps does not appreciate the difficulty of the original ascent. So in mathematics, it may be found hard to realise the great initial difficulty of making a little step which now seems so natural and obvious, and it may not be surprising if such a step has been found and lost again.","Louis Joel Mordell (1888-1972; Three Lectures on Fermat's Last Theorem, p.4)"],
["But as Nature is the best guide, teaching must be the development of natural inclinations, for which purpose the teacher must watch his pupil and listen to him, not continually bawl words into his ears as if pouring water into a funnel. Good teaching will come from a mind well made rather than well filled.","Michel de Montaigne (On Educating Children, 1588)"],
["Sometimes a good idea comes to you when you are not looking for it. Through an improbable combination of coincidence, naivete and lucky mistakes ...","Kary Mullis (The Unusual Origin of the Polymerase Chain Reaction, Sci. Amer., April 1990, p. 445)"],
["The world is continuous, but the mind is discrete.","David Mumford (ICM 2002 plenary talk, Aug. 21, 2002)"],
["I seem to have been only like a boy playing on the seashore, and diverting myself in now and then finding a smoother pebble or a prettier shell than ordinary, whilst the great ocean of truth lay all undiscovered before me.","Isaac Newton (1643-1727)"],
["Critique the effectiveness of your lesson, not by what answers students give, but by what questions they ask.","Fawn Nguyen"],
["And those who were seen dancing were thought to be insane by those who could not hear the music.","Friedrich Nietzsche (1844-1900)"],
["To speak freely of mathematics, I find it the highest exercise of the spirit; but at the same time I know that it is so useless that I make little distinction between a man who is only a mathematician and a common artisan. Also, I call it the most beautiful profession in the world; but it is only a profession.","Blaise Pascal"],
["The simple equations that generate the convoluted Mandelbrot fractal have been called the wittiest remarks ever made.","John Allen Paulos (Irreligion, p. xii, and Once Upon a Number, p. 130-131)"],
["Leo, do you have a religion? You know, a religion, like Jewish, or Christian, or Mathematics...?","Alon Peres, 6-year old son of Yuval Peres (as quoted in Amer. Math. Monthly 110, p. 324)"],
["Computers are useless. They can only give you answers.","Pablo Picasso"],
["Mathematics is the art of giving the same name to different things.","Jules Henri Poincare (1854-1912)"],
["One geometry cannot be more true than another; it can only be more convenient.","Jules Henri Poincare (1854-1912)"],
["Science is facts; just as houses are made of stones, so is science made of facts; but a pile of stones is not a house and a collection of facts is not necessarily science.","Jules Henri Poincare (1854-1912)"],
["Geometry is the science of correct reasoning on incorrect figures.","George Polya (1887-1985)"],
["Hilbert once had a student in mathematics who stopped coming to his lectures, and he was finally told that the young man had gone off to become a poet. Hilbert is reported to have remarked, 'I never thought he had enough imagination to be a mathematician'.","George Polya (1887-1985)"],
["Theorems are fun especially when you are the prover, but then the pleasure fades. What keeps us going are the unsolved problems.","Carl Pomerance"],
["Where a calculator like the ENIAC today is equipped with 18,000 vacuum tubes and weighs 30 tons, computers in the future may have only 1,000 vacuum tubes and perhaps weigh only 1 1/2 tons.","Popular Mechanics, March 1949, p. 258"],
["I think some intuition leaks out in every step of an induction proof.","Jim Propp "],
["Quite frankly, teachers are the only profession that teach our children.","Dan Quayle"],
["Cambridge gave me various kinds of teaching and supervision, but possibly the most important influences were Jeffrey Goldstone and Peter Swinnerton-Dyer, who encouraged me to continue to think for myself and not to take the technical details too seriously.","Miles Reid (in his pre-mortal obituary)"],
["Mathematics is persistent intellectual honesty.","Moses Richardson (Mathematics and intellectual honesty, Amer. Math. Monthly 59 (1952), p. 73)"],
["I like to think of mathematicians as forming a nation of our own without distinctions of geographical origin, race, creed, sex, age or even time... all dedicated to the most beautiful of the arts and sciences.","Julia Robinson"],
["God created infinity, and man, unable to understand infinity, created finite sets.","Gian-Carlo Rota"],
["If we have no idea why a statement is true, we can still prove it by induction.","Gian-Carlo Rota"],
["Nature imitates mathematics.","Gian-Carlo Rota"],
["Every field has its taboos. In algebraic geometry the taboos are (1) writing a draft that can be followed by anyone but two or three of one's closest friends, (2) claiming that a result has applications, (3) mentioning the word 'combinatorial,' and (4) claiming that algebraic geometry existed before Grothendieck (only some handwaving references to 'the Italians' are allowed provided they are not supported by specific references).","Gian-Carlo Rota"],
["There is something in statistics that makes it very similar to astrology.","Gian-Carlo Rota"],
["It is because modern education is so seldom inspired by a great hope that it so seldom achieves a great result. The wish to preserve the past rather than the hope of creating the future dominates the minds of those who control the teaching of the youth.","Bertrand Russell"],
["In all affairs it's a healthy thing now and then to hang a question mark on the things you have long taken for granted.","Bertrand Russell"],
["If you want to build a ship, don't drum up people to collect wood and don't assign them tasks and work, but rather teach them to long for the endless immensity of the sea.","Antoine de Saint-Exupery"],
["Grown-ups never understand anything for themselves, and it is tiresome for children to be always and forever explaining things to them.","Antoine de Saint-Exupery"],
["All truth passes through three stages. First, it is ridiculed. Second, it is violently opposed. Third, it is accepted as being self-evident.","Arthur Schopenhauer (1788-1860)"],
["The problem is that we tend to live among the set of puny integers and generally ignore the vast infinitude of larger ones. How trite and limiting our view!","P. D. Schumer (Mathematical Journeys, Wiley, 2004)"],
["A felicitous but unproved conjecture may be of much more consequence for mathematics than the proof of many a respectable theorem.","A. Selberg (Collected papers, vol. I (1989), p. 700)"],
["He [Taniyama] was gifted with the special capability of making many mistakes, mostly in the right direction. I envied him for this and tried to imitate him, but found it quite difficult to make good mistakes.","Goro Shimura (Nova program on FLT and Fermat's Enigma by Simon Singh, p. 174)"],
["In theory, there is no difference between theory and practice. But, in practice, there is.","Jan L.A. van de Snepscheut"],
["Mathematics is the science of patterns, and nature exploits just about every pattern that there is.","Ian Stewart (Nature's Numbers: The Unreal Reality of Mathematical Imagination, Basic Books, New York, 1995, p. 18)"],
["If you think it's simple, then you have misunderstood the problem.","Bjarne Strustrup (lecture at Temple U., 11/25/97)"],
["The only reason that we like complex numbers is that we don't like real numbers.","Bernd Sturmfels"],
["The purely formal language of geometry describes adequately the reality of space. We might say, in this sense, that geometry is successful magic. I should like to state a converse: is not all magic, to the extent that it is successful, geometry?","Rene Thom (Structural Stability and Morphogenesis, W. A. Benjamin, Reading, MA, 1975, p. 11)"],
["Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do. So throw off the bowlines, sail away from the safe harbour, catch the trade winds in your sails. Explore. Dream. Discover.","Mark Twain (1835-1910)"],
["Phyllis explained to him, trying to give of her deeper self, 'Don't you find it so beautiful, math? Like an endless sheet of gold chains, each link locked into the one before it, the theorems and functions, one thing making the next inevitable. It's music, hanging there in the middle of space, meaning nothing but itself, and so moving...","John Updike (Village, Alfred A. Knopf, New York, 2004, pp. 93-96)"],
["A lack of seriousness has led to all sorts of wonderful insights.","Kurt Vonnegut"],
["That's all well and good in practice, but how does it work in theory?","Shmuel Weinberger"],
["My work always tried to unite the true with the beautiful, but when I had to choose one or the other, I usually chose the beautiful.","Hermann Weyl"],
["The pursuit of mathematics is a divine madness of the human spirit.","Alfred North Whitehead (1861-1947)"],
["Fundamental progress has to do with the reinterpretation of basic ideas.","Alfred North Whitehead (1861-1947)"],
["Order is not sufficient. What is required, is something much more complex. It is order entering upon novelty; so that the massiveness of order does not degenerate into mere repetition; and so that the novelty is always reflected upon a background of system.","Alfred North Whitehead (1861-1947)"],
["A generating function is a clothesline on which we hang up a sequence of numbers for display.","Herbert Wilf"],
["The full beauty of the subject of generating functions emerges only from tuning in on both channels: the discrete and the continuous.","Herbert Wilf"],
["Induction makes you feel guilty for getting something out of nothing, and it is artificial, but it is one of the greatest ideas of civilization.","Herbert Wilf"]
];

// function to check cookie (true if exists, false if not)
function checkCookie(){
    var quote = getCookie();
    if (quote != "") {
      return true;
    } else {
      return false;
    }
}
// set the cookie so can be referenced later
function setCookie(cvalue){
    var cname = "quote";
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
// actually acquire the cookie and read it
function getCookie() {
    var cname = "quote";
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function ShowQuote(){
  let randomNum = Math.floor((Math.random() * Quotes.length)); // pick a random number from 0 to length of quote
  if(checkCookie()){ // check if cookie exists
    while(Quotes[randomNum] != getCookie()) randomNum = Math.floor((Math.random() * Quotes.length));
    } // while cookie's quote != generated quote
  document.getElementById('Quote').innerHTML = Quotes[randomNum][0];
  document.getElementById('Auth').innerHTML = '-' + Quotes[randomNum][1];// set content
  setCookie(Quotes[randomNum]); // set cookie
  
}
window.onload = ShowQuote(); // run on window load

//end