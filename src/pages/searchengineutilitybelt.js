import * as React from "react"
import searchenginedemo from "../images/searchengineutilitybeltedited.mp4"
import "../page_styling/pages.css"
import Seo from "../components/seo"

const SearchEngineUtilityBelt = () => (
    <>
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </head>
        <body>
            <Seo title="Search Engine Utility Belt" />
            <div className="page_container">
                <h1 className="page_title"> Search Engine Utility Belt </h1>
                <h3 className="page_subtitle">
                    Browser extension I created to show how pervasive ads are in search engines by highlighting ads on Bing and keeping track of how many you see on each tab. Also
                    ensures recent results.
                </h3>
                <video controls preload="auto" className="page_video">
                    <source src={searchenginedemo} type="video/mp4"></source>
                </video>
                <p className="page_description">
                    When using this browser extension, whenever you search on Bing, all of the ads will get red backgrounds to make it more clear that they are ads, and the number of ads
                    displayed on a Bing tab will be included in the name of the tab. Also, "in 2021" will be appended to whatever you search to ensure the results are recent (this extension
                    was created in 2021). For example, if you search "cars" it will change the search to "cars in 2021" automatically and the name of the tab will be "2 ads cars in 2021".
                    Also, clicking on the browser extension popup will show the number of ads in each tab.
                </p>
                <p className="page_description">
                    The number of ads that it counts isn't always perfect, because the way that Bing structures their search results makes it hard to programtically get an accurate count each time.
                    But typically it should be within 1 of the actual count, assuming you count a single component as a single ad (ie if there's a carousel advertising 15 different cars this
                    is considered 1 ad, not 15). The other tricky part of implementing this was to make sure that it worked every time a term was searched. Chrome extensions have gone through
                    a variety of different "Manifest Versions" which are when Google changes the rules around how browser extensions work. Recently Google has moved from Manifest Version 2
                    to Version 3, although Version 2 chrome extensions will still be supported for about a year longer. So the way that this used to be done in (in version 2)
                    chrome extensions was with something called a "background script". The background script could be activated every time a web request was completed (a term is searched). So,
                    this is the approach I ended up taking. However, I tried to get it to work on Manifest Version 3 with something called "service workers" which are replacing "background scripts",
                    however it isn't really possible. Background scripts were able to be long living and activate when web requests are completed, but service workers can't be long living
                    and only activate for a few seconds then go away. It's quite a contentious topic in the browser extension community and you can read more about it in the following links. The first two
                    talk about how this change from background scripts to service workers is an unfair move by Google because it makes it harder for Ad Blockers to work which is in Google's favor
                    because they run one of the biggest online ad networks in the world. It would be one thing if Google was upfront about this, but instead they claim it to be because of "security and speed": 
                    <a href="https://www.theverge.com/2019/2/20/18232972/google-chrome-ad-blocking-manifest-3-changes-response" target="_blank" rel="noreferrer"> https://www.theverge.com/2019/2/20/18232972/google-chrome-ad-blocking-manifest-3-changes-response</a> and
                    <a href="https://www.eff.org/deeplinks/2021/12/chrome-users-beware-manifest-v3-deceitful-and-threatening" target="_blank" rel="noreferrer"> https://www.eff.org/deeplinks/2021/12/chrome-users-beware-manifest-v3-deceitful-and-threatening</a>.
                    The second link is a bug filing with the Chromium team to change this: <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=1024211" target="_blank" rel="noreferrer"> https://bugs.chromium.org/p/chromium/issues/detail?id=1024211</a>.
                    Finally here's a stackoverflow thread talking about it: <a href="https://stackoverflow.com/questions/66914626/chrome-extensions-service-worker-not-starting-on-event/70745536#70745536" target="_blank" rel="noreferrer"> https://stackoverflow.com/questions/66914626/chrome-extensions-service-worker-not-starting-on-event/70745536#70745536</a>.
                </p>
                <p className="page_description">
                    Overall, this browser extension I coded highlights how pervasive advertising is online which also ties in with how pervasive data collection and tracking is. I think
                    internet privacy is important and it's great when privacy preserving options are given. I use <a href="https://presearch.org" target="_blank" rel="noreferrer"> https://presearch.org/</a> as my
                    primary search engine because it doesn't track me and it rewards me for seeing ads. It's also decentralized and allows members of the community to contribute to the search engine.
                    I also used <a href="https://search.brave.com" target="_blank" rel="noreferrer"> https://search.brave.com</a> because it's an independent search engine that doesn't use
                    Bing or Google's algorithms for it's results which I think is important so that Big Tech doesn't have too much power. I use <a href="https://www.duckduckgo.com" target="_blank" rel="noreferrer"> https://www.duckduckgo.com</a>
                    as they don't track me either and are 125% carbon negative. Finally, I use <a href="https://www.neeva.com" target="_blank" rel="noreferrer"> https://www.neeva.com</a> because they offer a paid
                    ad free search option.
                </p>
            </div>
        </body>
    </>
)

export default SearchEngineUtilityBelt
