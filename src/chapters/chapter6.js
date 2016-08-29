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
        someone from your past.
      </p>
      <p>
        You know the Troianos. Sure, Healey might’ve meant somebody else, but when
        folks around here name a family, it usually means the one you’re
        apt to think about first. This clan owns a chain of little pizza places up and
        down Cape May County. You went to  school with one of the daughters,
        Nicki Troiano. And she
        has an older brother, graduated a little before you, who was always getting
        into trouble: one of those guys who figured he could
        scheme his way into the success that other people worked  for.
      </p>
      <p>
        Nicki was a friend, insofar as girls and boys could be friends then. She grew up
        with an aunt in South Philly—you never quite knew why—and transferred in as a
        freshman. She didn’t have many friends and neither did you, and while you
        never had enough in common it was nice to know someone had your
        back. And let’s be honest: you had a bit of a crush.
      </p>
      <p>
        There’s a list as long as your arm of  old acquaintances you haven’t bothered
        to get in touch with since you moved back, but Nicki’s the only one you’ve really
        avoided. Growing up, she heard you complain about your mom for years: about her job, her flaky
        behavior, her mortifying clothes, and the fact that you lived in a cheap apartment
        over a tourist trap. Now <em>you</em> have that job, that behavior, and twenty
        years later you live in the same shithole.
      </p>
      <p>
        Your heart sunk a little when Healey muttered that familiar name, but he
        had to be talking about her brother. Nicki wouldn’t get herself in debt to a bookie.
        On the other hand, you know as well as Whitby does: everybody’s the type.
      </p>
      <p>
        So you’re loitering outside <em>Nicki’s Famous Pizzeria</em> (not famous, and her
        father named her after the pizza place rather than the other way around). When your
        disgust at your own cowardice finally gets the better of you, you go in.
      </p>
      <p>
        Nothing’s changed much in twenty years. One of the reasons Nicki had a tough time
        making other friends was her schedule: she was working almost all the time. Said she’d
        rather sling pizza when she was young than when she was old. You’re
        not the only one who’s ended up standing still.
      </p>
      <p>
        She doesn’t see you right away, and rings up a family’s hoagies and soda total
        in her head. She was always good at math. When you get to the head of the line,
        you’re not sure what kind of reaction to expect, but she’s
        genuinely happy to see you. “Frankie! I heard you was in town again.” She never lost
        her Philly accent.
      </p>
      <p>
        “Yeah, I’ve been meaning to—” She waves off your excuse and hands you a couple of
        slices on the house. “Gimme a minute, I’ll get somebody to sub in. Grab a coke.”
        She disappears in the back and you dutifully take your food to a corner booth.
      </p>
      <p>
        She’s slurping from a giant lemonade when she slides in next to you—not across from you—
        and she looks younger than 35, like you remember her. “How you been?”
        she says.
      </p>
      <p>
        This sudden influx of kindness is almost unbearable. “Good, Nicki, I’m good.” You
        savor the moment before you ruin this reunion.
        “And I want to catch up sometime, I promise. I’ve been a real asshole, not coming to
        see you.”
      </p>
      <p>
        “Nothing’s changed then,” she says, smiling. “I heard about your mom, I’m sorry. I would’ve
        come to the funeral but I never saw a notice in the paper.”
      </p>
      <p>
        “There was nothing public,” you say.
      </p>
      <p>There’s no censure in her expression, only concern. “A lot of people loved her. She did
        good for folks around here who had nobody else who’d listen to them.”
        When you say nothing, she changes tack. “I can tell from the look on
        your face this isn’t a social call, but I’m gonna hold you to your promise.
        What can I do you for?”
      </p>
      <p>
        “Listen, Nicki, I gotta ask you about
        something but I need you to just trust me and not ask me why.” She shrugs and nods.
        “Is Jimmy mixed up in any kind of trouble?”
      </p>
      <p>
        It’s obvious her first instinct is in fact to ask you why, but she restraints herself.
        “He’s supposed to work shifts here but it’s been months since I’ve seen him around the
        restaurant. I’d fire the bum but it’s still dad’s place, and Jimmy can do no wrong. So yeah,
        he may be up to something.
      </p>
      <p>
        “He’s got a fancy new car—a Porsche for christsakes—went in with some buddies on
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
        just to dump a new pile of shit on me, Frankie.”
      </p>
      <p>
        “I’m just trying to make something right.”
      </p>
      <p>
        “Since he’s gotten the boat he spends a lot of time down at
        his ‘marina’. But I think that’s just a fancy way of saying a bar with a bunch
        of deadbeats.”
      </p>
      <p>
        “Jared Healey’s marina?” you ask.
      </p>
      <p>
        “Yeah, sounds familiar. Didn’t he just pass away?”
      </p>
      <p>
        “His brother did,” you say. Your mind is already spinning.
      </p>
      <p>
        Nicki puts her hand on yours, which is more physical contact than you were ever
        able to initiate in high school. “You be careful, Frankie. I don’t want to lose my
        friend a second time.”
      </p>
      <p>
        The lump in your throat is physically painful. “Can I borrow your phone?”
      </p>
    </section>,
    <section>
      <hr/>
      <h3>Pier 73 Marina</h3>
      <p>
        Nicki didn’t know where the marina was, but you called Information and got the address. You also
        called Whitby, who didn’t like your plan but reluctantly agreed to go along with it. “Hey,” you
        say, while you have her on the line, “Did you find Michael Herschel?”
      </p>
      <p>
        She was at home when you called; her office transferred you there. You felt weirdly guilty
        when a man answered. She doesn’t wear a ring, maybe a boyfriend? In the background you hear
        him making dinner. A normal life. “No,” she’s saying, “No answer at his house, his sister
        says she hasn’t seen him for weeks.”
      </p>
      <p>
        “You believe her?”
      </p>
      <p>
        “Hard to say, I didn’t make the housecall. Probably not.” You hear clanging pots in the background.
        “Listen, I gotta go. I’ll make sure a patrol car picks him up. You do your part, but be careful.”
      </p>
      <p>
        Two people in one day expressing interest in your welfare is some kind of record. “Sorry I
        interrupted dinner.”
      </p>
      <p>
        “I can’t cook for shit, my job is to stay out of the kitchen. You were doing Hank a favor.” <em>Hank</em> surely
        must be a cop too. “Be careful,” she adds.
      </p>
      <p>
        “You said that already.”
      </p>
      <p>
        “And I’ll keep saying it until you thank me.” She hangs up, but you know she’s not actually mad.
      </p>
      <p>
        It doesn‘t take long to drive to the marina, and you know you’ve found the right one because it’s
        a total dive. You wouldn’t park a rusted-out Pinto here much less a six-figure
        sailboat, but there one is, prominently docked next to the tavern. You don’t know boats,
        but you do recognize craftsmanship, and the boat is a thing of beauty: white and chrome and gleaming.
        The name stenciled along the bow: <smallcaps>Hot Sea Men</smallcaps>.
      </p>
      <p>
        “Classy,” you mutter. You parked a half mile down the marsh road and are crouched behind
        one of many equally incongruous cars in the parking lot: a couple BMWs, a
        bright red Corvette, and Jimmy Troiano's gold Porsche.
      </p>
      <p>
        It’s another postcard beach day, bright and cloudless; you’re totally exposed. You
        bend over and dart behind Jimmy’s car, keeping an eye on the tavern. If someone
        comes out, they’ll spot you in a minute.
      </p>
      <p>
        Jimmy hasn’t had his car long but he’s not much for maintenance. There’s sand caked
        along the undercarriage (did this idiot drive it on the <em>beach</em>?) and its
        metallic finish is marred by lots of small dings. Good. You don’t want him
        looking at the <List expansions={["car", ["license plate", "taillight", "tailpipe"], "car’s rear end" ]} conjunction="or" tag="c6_car" /> too closely.
      </p>
    </section>,
    <section>
      <p>
        <Map from={inventory.c5_car} to={{
          plate: `The plate reads, <smallcaps>JIMMY8</smallcaps>. <em>Subtle</em>. You
          remove all the screws from the plate. It hangs there on friction alone but as soon as the
          car pulls out on this uneven gravel, it should fall off.`,
          taillight: `It was cracked already, so putting it into an illegal state is just a matter of
          loosening it further with a pocket screwdriver. It’s hanging on for now, but
          as soon as the car pulls out on this uneven gravel, it should fall off.`,
          tailpipe: `It’s a ridiculously huge tailpipe, almost phallic. You reach behind it, to the
          muffler, and pull hard. With a couple quick tugs it’s now hanging low; after a few
          loosened screws, it’s guaranteed to start dragging on the ground.`
        }} />
      </p>
      <p>
        Just as you creep away from the car, the tavern door opens. You pull back, hiding behind the
        small body of the Porsche. You’re now drenched in sweat.
      </p>
      <p>
        The sound carries easily. It’s Michael Herschel, in the flesh for the first time, and his
        Nordic white features are marred by red anger. “I know you bums are hiding him from me.
        When I come back I won’t be so friendly.” You sigh. Everybody wants to be a wise guy.
      </p>
      <p>
        One of the Beemers belongs to him. It’s got one of those car phones—first you’ve ever seen.
        but he closes the door before you can hear who he calls. The car pulls out fast, fishtailing
        on the gravel, and the resulting cloud of dust is sufficient cover for you to awkwardly
        scamper back to the road.
      </p>
      <p>
        Incredibly, Jimmy was hiding too: lying down in a derilict rowboat. He waves off the
        guys who spill out of the tavern to gawk—you imagine they deserve from gratitute for
        not ratting him out—but he’s still the arrogant prick you remember and he gets into his Porsche instead.
        He doesn’t seem to have noticed you or the sabotage on his vehicle.
      </p>
      <p>
        You pull a fishing hat down low as he drives past, but there’s no chance of detection,
        and you’re immensely satisfied to see the <Map from={inventory.c5_car} to={{
          plate: `plate fall off and tumble into the cattails`,
          taillight: `taillight cover fall off and tumble into the cattails`,
          tailpipe: `tail pipe come loose and start dragging along the road, clattering and sparking`
        }} />.
        
      </p>
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
