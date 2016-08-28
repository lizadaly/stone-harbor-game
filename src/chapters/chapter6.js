const React = require('react')
import { Map, List, NextChapter } from '../components'
import { connect } from 'react-redux'
import { updateInventory } from "../actions"

import { RenderSection } from '.'

const _Chapter = ({currentSection, inventory, chapterId}) => {
  var sections = [
    <section>
      <h2>Chapter Six</h2>
      <h3>On the boardwalk</h3>
      <p>
        You should’ve gone straight to Whitby. You will. But first you need to see
        something for yourself.
      </p>
      <p>
        You know the Troianos. Sure, Healey might’ve meant some other person with that
        name, but when folks around here name a family, it usually means the one you’re
        apt to think about first. This clan owns a chain of little pizza places up and
        down Cape May county. You went to high school with one of the daughters,
        Nicki Troiano. And she
        has an older brother, graduated a little before you, who was always getting
        into trouble: one of those guys who figured he could
        scheme his way into the success that other people worked  for.
      </p>
      <p>
        Nicki was a friend, insofar as girls and boys could be friends then. She grew up
        with an aunt in South Philly—you never quite knew why—and transferred in as a
        freshman. She didn’t have many friends and neither did you, and while you
        never had enough in common to be really close, it was nice to know someone had your
        back. And let’s be honest: you had a bit of a crush.
      </p>
      <p>
        There’s a list as long as your arm of the old acquaintances you haven’t bothered
        to get in touch with since you moved back, but Nicki’s the only one you’ve really
        avoided. She heard you complain about your mom for years: about her job, her flaky
        behavior, her mortifying clothes, and the fact that you lived in a cheap apartment
        over a tourist trap. Now <em>you</em> have that job, that behavior, and twenty
        years later you live in the same dump.
      </p>
      <p>
        Your heart sunk a little when Healey muttered that familiar name, but he
        had to be talking about her brother. Though you know as well as Whitby does: everybody’s the type.
      </p>
      <p>
        So you’re loitering outside <em>Nicki’s Famous Pizzeria</em> (not famous, and her
        father named her after the pizza place rather than the other way around). When your
        disgust at your own cowardice finally gets the better of you, you go in.
      </p>
      <p>
        Nothing’s changed much in twenty years. One of the reasons Nicki had a tough time
        making other friends was her schedule: she was working almost all the time. Said she’d
        rather hand out slices when she was young than when she was old. At least you’re
        not the only one who’s ended up standing still.
      </p>
      <p>
        She doesn’t see you right away, and rings up a family’s hoagies and soda total
        in her head. She was always good at math. When you get to the head of the line,
        you’re not sure what kind of reaction to expect, and it’s a surprise when she’s
        genuinely happy to see you. “Frankie! I heard yous in town again.” She never lost
        her Philly accent.
      </p>
      <p>
        “Yeah, I’ve been meaning to—” She waves off your excuse and hands you a couple of
        slices on the house. “Gimme a minute, I’ll get somebody to replace me. Grab a coke.”
        She disappears in the back and you dutifully take your food to a corner booth.
      </p>
      <p>
        She’s slurping from a giant lemonade when she slides in next to you—not across from you—
        and she looks younger than 35, like you remember her. “How you been?”
        she says.
      </p>
      <p>
        This sudden influx of kindness is almost unbearable. “Good, Nicki, I’m good.” You pause.
        “And I want to catch up sometime, I promise. I’ve been a real asshole, not coming to
        see you.”
      </p>
      <p>
        “Nothing’s changed then,” she says, smiling. “I heard about your mom, I’m sorry. I would’ve
        come to the funeral but I never saw a notice in the paper.”
      </p>
      <p>
        “There wasn’t a public funeral,” you say. With anyone else you’d feel you needed to explain, but
        not her. There’s no censure in her expression, only concern.
      </p>
      <p>
        “So what can I do you for?” Before you can answer, she adds, “I can tell from the look on
        your face this isn’t a social call, but I’m gonna hold you to your promise.”
      </p>
      <p>
        “Deal. Listen, Nicki, I gotta ask you about
        something but I need you to just trust me and not ask me why.” She shrugs and nods.
        “Is Jimmy mixed up in any kind of trouble?”
      </p>
      <p>
        You can see her warring with herself to probe. “I dunno what,
        but I think so. He’s supposed to work shifts here but it’s been months since I’ve seen him around the
        restaurant. I’d fire the bum but it’s still dad’s place, and Jimmy can do no wrong.” That’s
        an old tension in their family, and sadly, a common one. Favored son, dutiful daughter.
      </p>
      <p>
        “Meanwhile he’s got a fancy new car—a Porsche for christsakes—went in with some buddies on
        a sailboat when he wouldn’t know his aft from his ass. I saw him at Easter, asked him what he
        was into, but he just said he had a good run at the Sands.” You both know how implausible
        that is—you can win big in Atlantic City, but you need to start big. Nobody working a
        pizza joint wins car money.
      </p>
      <p>
        “You know where I might find him?”
      </p>
      <p>
        For the first time, she looks at you a little suspiciously. “Don’t come back into my life
        if you’re in trouble too, Frankie.”
      </p>
      <p>
        You honestly don’t know how to answer that. “I’m just trying to make something right,” you say.
      </p>
      <p>
        That seems to be good enough. “Since he’s gotten the boat he spends a lot of time down at
        his ‘marina’. But I think that’s just a fancy way of saying a bar with a bunch
        of deadbeats.”
      </p>
      <p>
        “Jared Healey’s marina?” you ask.
      </p>
      <p>
        “Yeah, sounds familiar. Didn’t he just die?”
      </p>
      <p>
        “His brother did,” you say. Your mind is already spinning.
      </p>
      <p>
        Nicki puts her hand on yours, which is more physical contact than you were ever brave
        enough to initiate in high school. “You be careful, Frankie. I don’t want to lose my
        friend a second time.”
      </p>
      <p>
        The lump in your throat is physically painful, and just like Healey, you mutter something, and flee.
      </p>
    </section>,
    <section>

    </section>
  ]
  return <RenderSection currentSection={currentSection} sections={sections} />
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentSection: state.bookmarks[ownProps.chapterId],
    inventory: state.inventory
  }
}

export const Chapter6 = connect(
  mapStateToProps
)(_Chapter)
