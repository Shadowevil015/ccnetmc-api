# CCNetMC API 
A REST API providing info about people, places and more on CCNetMC. This is a fork of the EarthMC API, created by [Owen3H](https://github.com/Owen3H) and [Warriorrrr](https://github.com/Warriorrrr).

The original source code can be found here: [https://github.com/Owen3H/EarthMC-API](https://github.com/Owen3H/EarthMC-API)

## Basic Setup (JS Example)
1. Install a fetch package in your chosen language.
```js 
$ npm install ccnetmc
```
2. Require/import the package.
```js
var fetch = require("node-fetch")
```
3. Implement by fetching and returning the data. 
  ```js
var town = await fetch("https://ccnet-api.herokuapp.com/api/v1/towns/new_amsterdam").then(res => res.json()).catch(err => { return err })

console.log(town)
// => {"name":"New_Amsterdam","nation":"Oceanic_Empire","residents":["ShootingRice","Shadowevil015","PinkyBleu"],"area":322,"mayor":"ShootingRice","capital":true,"x":18200,"z":3984,"bank":"$10,367.50","upkeep":"$320"}
```

### Understanding the structure
<dl>
  <dl>Start with the base domain - </dl>
  <dd>• https://ccnet-api.herokuapp.com/api/v1</dd>
  
  <dl>Append a route from the list below</dl>
  <dd>Full URL Example: http://earthmcstats.ddns.net/api/v1/towns</dd>
</dl>

## Routes
<details>
<summary>Towns</summary>
<p>

All - [towns/](https://ccnet-api.herokuapp.com/api/v1/towns/)<br>
Single - [towns/townName](https://ccnet-api.herokuapp.com/api/v1/towns/London)
</details>

<details>
<summary>Nations</summary>
<p>

All - [nations/](https://ccnet-api.herokuapp.com/api/v1/nations/)<br>
Single - [nations/nationName](https://ccnet-api.herokuapp.com/api/v1/nations/Britain)
</details>

<details>
<summary>Residents</summary>
<p>

All - [residents/](https://ccnet-api.herokuapp.com/api/v1/residents/)<br>
Single - [residents/residentName](https://ccnet-api.herokuapp.com/api/v1/residents/Warriorrr)
</details>

<details>
<summary>Players</summary>
<p>

This merges online players and residents.<br>
**NOTE** - The "town", "nation" and "rank" keys will not appear for townless players

All - [allplayers/](https://ccnet-api.herokuapp.com/api/v1/allplayers/)<br>
Single - [allplayers/playerName](https://ccnet-api.herokuapp.com/api/v1/allplayers/playerName)
</details>

<details>
<summary>Online Players</summary>
<p>

All - [onlineplayers/](https://ccnet-api.herokuapp.com/api/v1/onlineplayers/)<br>
Single - [onlineplayers/playerName](https://ccnet-api.herokuapp.com/api/v1/onlineplayers/playerName)
</details>

<details>
<summary>Townless</summary>
<p> 
  
Only displays townless players that are online.
  
[townlessplayers/](https://ccnet-api.herokuapp.com/api/v1/townlessplayers)
</details>

<details>
<summary>Nearby</summary>
<p>
  
Returns any players visible on the map in a radius to a certain point.<br>
  
xPos/zPos - The coordinates of a point on the dynmap.<br>
xRadius/zRadius - The x and z radii (in blocks) around the specified coords.

[nearby/xPos/zPos/xRadius/zRadius](https://ccnet-api.herokuapp.com/api/v1/nearby/xPos/zPos/xRadius/zRadius)
</details>

<details>
<summary>Server Info</summary>
<p>

[serverinfo/](https://ccnet-api.herokuapp.com/api/v1/serverinfo/)
</details>
