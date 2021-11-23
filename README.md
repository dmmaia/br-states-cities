## Getting started

List all states

``` javascript
    import {getStates} from "br-states-cities";

    console.log(getStates())
```

List cities by state initials

``` javascript
    import {getCitiesByInitials} from "br-states-cities";

    console.log(getCitiesByInitials("MG"))
```

List cities by state name

``` javascript
    import {getCitiesByStateName} from "br-states-cities";

    console.log(getCitiesByStateName("Minas Gerais"))
```