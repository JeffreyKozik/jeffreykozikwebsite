import * as React from "react"
import walksatGraph from "../../images/walksatGraph.png"
import walksatdplledited from "../../images/walksatdplledited.mp4"
import * as pages from "../../page_styling/pages.module.css"

const WalksatDPLLComponent = () => (
    <>
        <h1 className={pages.page_title}> WalkSAT and DPLL Java Program </h1>
        <h3 className={pages.page_subtitle}>
            Java program I coded with two classmates to test both the WalkSAT and DPLL
            algorithms of determining whether a logic formula in CNF is satisfiable or not.
        </h3>
        <img className={pages.page_video} src={walksatGraph} alt="walksat graph screenshot"/>
        <p className={pages.page_description}>
            Above is a graph showing the fraction of 3CNF formulas that are satisfiable at various
            values of C/V where C is the number of clauses in the 3CNF formula and V is the total number
            of variables. When there's many clauses and not very many variables, it's very unlikely the
            formula is satisfiable because there's a lot of clauses that need to be satisified and only a
            few variables to do this with. And on this flip side when there's not many clauses and many variables
            it's much more likely the formula is satisfiable because only a few clauses need to be satisfied and
            there's many variables to do this with. Below is a video showing the testing program in action.
            This is described in more depth below.
        </p>
        <video controls preload="auto" className={pages.page_video}>
            <source src={walksatdplledited} type="video/mp4"></source>
        </video>
        <p className={pages.page_description}>
            A logic formula is a way of representing boolean logic. For example ((A v B) ^ (C ^ D))
            is a logic formula. A logic formula in CNF (Conjunctive Normal Form) must follow a special
            template. Each clause must include only "OR" disjunctions: "(A v B)" follows this "(C ^ D)" does not,
            and each clause must have "AND" conunctions between each other (there is an "AND" conjunction
            between the two clauses in the above example). Any logic formula can be translated into CNF.
            3CNF specifically means that each clause has exactly 3 symbols.
        </p>
        <p className={pages.page_description}>
            Once in CNF, it's not much easier to answer the question, is the logic formula satisfiable?
            A logic function is satisfiable if there is a way to assign TRUE and FALSE values to the
            variables such that the entire logic function evaluates as TRUE. With small logic functions,
            it can be easy to answer this question at a glance, but with much larger logic functions, computers
            need sophisticated algorithms. This is where WalkSAT and DPLL come in.
        </p>
        <p className={pages.page_description}>
            First off, I'll explain how DPLL works. DPLL works by doing a depth first search of the sample space.
            So it methodically goes through every possible way to assign values to the variables. It also uses a number
            of heuristics to "prune" the depth first search tree.
            <ol>
                <li>Pure Literals: a pure liteal is when a variable either always appears negated or always appears
                unnegated in a formula. For example in (A v not B v not C) ^ (A v B v C) ^ (not B v D) A is a pure literal
                because in every single clause it is unnegated. If there is a pure literal, we can automatically set it
                to true because if there is a solution, there must be a solution with this pure literal always set to true.
                (Think about it, setting it to True (or if it's negated setting it to False) would only HELP you
                towards making a satisfiable formula).</li>
                <li>Unit Propagtion: unit propogation is when in a clause all other variables are assigned false except
                one variable hasn't been assigned a value yet. This variable must be True, or else the formula wouldn't
                be satisfiable.</li>
                <li>Unit Propagtion: unit propogation is when in a clause all other variables are assigned false except
                one variable hasn't been assigned a value yet. This variable must be True, or else the formula wouldn't
                be satisfiable.</li>
                <li>Early termination: if some assignment of values to variables makes a single clause false,
                that branch can be pruned because it makes the formula unsatisfiable; also as soon as a variable in a
                clause is true we don't have to consider the rest of the variables in the clause because it's already true.</li>
            </ol>
        </p>
        <p className={pages.page_description}>
            While DPLL basically brute force tries every combo of values (with some optimization via the heuristics),
            WalkSAT doesn't necessarily try every combo (so it can give incorrect results sometimes), but it is much
            faster than DPLL.
        </p>
        <p className={pages.page_description}>
            WalkSAT starts by assigning values to all of the variables. If all clauses are true, it stops.
            Otherwise, it picks one clause that evaluates to false. With a probability of 1-p it makes a "rational"
            move by flipping the value of a variable in that clause that maximizes the number of total clauses that are
            satisfied. Or, with probability p, it makes an "irrational" move and flips the value of a random variable
            in that clause. It repeats this a predetermined amount of times and if it doesn't find a satisfiable variable
            configuration, it predicts that the formula is unsatisfiable (even though it technically could be satisfiable,
            but WALKSAT hasn't tried the right combination).
        </p>
    </>
)

export default WalksatDPLLComponent
