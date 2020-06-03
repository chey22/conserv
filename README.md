# Conserv Coding Test:
#### Objective:
Create a simple React app that displays data retrieved from a web service.

#### Description:
Conserv creates solutions to help professions involved in collections care (like museums, libraries, galleries, etc) take better care of their stuff. One of the ways we do that is to give
them information about the environmental conditions in their spaces.

We collect a lot of data, and a graph is a great way to show someone what that data looks like so they can see trends and current readings. Let’s build one.

#### Requirements:
1. Create a new React app. You can use ‘create-react-app’ if that works for you, or another set of tools if you prefer something different.

2. This app should consist of one page. The page should should have three sections, use HTML and CSS to create them:
    1. **A header** - This header should contain the Conserv logo, which you can pull from our web site or [this url](https://www.conserv.io/hs-fs/hubfs/Conserv%20Half.png?width=150&name=Conserv%20Half.png).
    2. **A body area** - This body area will contain the graph to display.
    3. **A footer area** - This area can be empty, or you can put copyright info, your name, or some other info there, up to you!

3. This app needs to show some data, so you’ll need to get it. We have a simple web API that will return some data for you to use. You can find it at [this URL](https://app.conserv.io/data/api/health/db).

    This service will return you a list of readings as a JSON array. Each “reading” is a javascript object that contains all of the readings for a specific time. An example of the data the service returns can be found at the end of this document.

    You’ll need to call this URL to get the data to display. We use Axios at Conserv, but feel free to use Fetch, or whatever else you like.

4. Data is no good without a display! We need to find a way to show this to the user. A line chart is a good way to show data. Add a simple line chart to the page. We don’t expect you to
write a component to display a line chart. Find a component on NPM for this. Include the component in your example React app and use it to display a line chart of the data that you got from the web service. You can pick any reading you like from the returned data, but we suggest `avg_temp1` as that’s the most straightforward.  

    Here are a few example components you might want to look at:

    - https://www.npmjs.com/package/recharts  
        This is the one we use at Conserv

    - https://www.npmjs.com/package/@nivo/line  
        Popular option on NPM

    - https://www.npmjs.com/package/anychart  
        Flexible chart option for React / Angular

    - https://www.npmjs.com/package/react-linechart  
        Simple line chart for react

    **Any of these could do the job, and there are a TON of other options.**

5. Once you are done and happy with the result, zip it up and send it over, or put it somewhere like Dropbox / Google Drive and send a link! We should be able to unzip your example, run `npm install` to pull down the dependencies, and then `npm start` to start up the React app and give it a try.

    If you get stuck on something here, you can always email me and ask for a pointer! Nobody at Conserv works in a vacuum. Well thought out questions that show you’ve done some research are absolutely welcome.

**Stretch goals!**

There’s a lot of opportunity to take this further. Think about how people would use a graph like this.

- What else might they like to see?
- If they have multiple sensors, how would they switch
between them?
- If each sensor has multiple readings, how would they switch between readings?
- What about units of measurement?
- Graphical flourishes?

It’s up to you to get as creative as you want to be.

Example data returned from API:

`[`  
`{`  
`"avg_temp1": 22.9,`  
`"avg_temp2": 22.4,`  
`"avg_rh": 51,`  
`"avg_vis": 15,`  
`"avg_uv1": 0,`  
`"avg_ir": 101,`  
`"min_temp1": 22.9,`  
`"min_temp2": 22.4,`  
`"min_rh": 51,`  
`"min_vis": 15,`  
`"min_uv1": 0,`  
`"min_ir": 101,`  
`"max_temp1": 22.9,`  
`"max_temp2": 22.4,`  
`"max_rh": 51,`  
`"max_vis": 15,`  
`"max_uv1": 0,`  
`"max_ir": 101,`  
`"bucket": "2019-11-06T00:00:00.000Z",`  
`"avg_dewpoint": 13.1`  
`},`  
`{`  
`"avg_temp1": 23.1166666666667,`  
`"avg_temp2": 22.6333333333333,`  
`"avg_rh": 50.1666666666667,`  
`"avg_vis": 9.5,`  
`"avg_uv1": 0,`  
`"avg_ir": 88.3333333333333,`  
`"min_temp1": 22.9,`  
`"min_temp2": 22.5,`  
`"min_rh": 50,`  
`"min_vis": 6,`  
`"min_uv1": 0,`  
`"min_ir": 79,`  
`"max_temp1": 23.2,`  
`"max_temp2": 22.7,`  
`"max_rh": 50.5,`  
`"max_vis": 14,`  
`"max_uv1": 0,`  
`"max_ir": 105,`  
`"bucket": "2019-11-06T00:30:00.000Z",`  
`"avg_dewpoint": 13.15`  
`}`  
`]`