# Project Overview Result

![alt text](src/assets/images/documentation/FinalEvidence.gif)

## Implement the following screens: [Figma](https://www.figma.com/file/GQccaSiW6oFKzdCh6mmdGx/Sample-screens-for-dev-interview?type=design&node-id=1%3A4&mode=dev) / IOS is the target for this exercise.

<img src="src/assets/images/documentation/P1.png" alt="drawing" width="300"/>
<img src="src/assets/images/documentation/P2.png" alt="drawing" width="300"/>
<img src="src/assets/images/documentation/P3.png" alt="drawing" width="300"/>
<img src="src/assets/images/documentation/P4.png" alt="drawing" width="300"/>
<img src="src/assets/images/documentation/P5.png" alt="drawing" width="300"/>
<img src="src/assets/images/documentation/P6.png" alt="drawing" width="300"/>
<img src="src/assets/images/documentation/P7.png" alt="drawing" width="300"/>
<img src="src/assets/images/documentation/P8.png" alt="drawing" width="300"/>
<img src="src/assets/images/documentation/P9.png" alt="drawing" width="300"/>

## Think about component reusability.

This project was made following the atomic design methodolog so that way, almost every piece of this could be reusable.

<img src="src/assets/images/documentation/R1.png" alt="drawing" width="300"/>

Every component has it's own presentation and style file so they could be treated as individual entities.

<img src="src/assets/images/documentation/R2.png" alt="drawing" width="300"/>

The use of a theme file was implemented so that all the configuration of the application it's handled in one place.

<img src="src/assets/images/documentation/R3.png" alt="drawing" width="300"/>

So that way it can be easy to drastically change our project with few modifications.

<img src="src/assets/images/documentation/R4.png" alt="drawing" width="500"/>

Every component has it's default required "variantStyles" for theme purposes to work but they could also be modified with "customStyles" to expand their properties.

<img src="src/assets/images/documentation/R5.png" alt="drawing" width="300"/>

A pretty straightforward example it's this developed Transaction Page that uses the same component as the dashboard Page in that way this could be used on both screens easy!

![alt text](src/assets/images/documentation/EE2.gif)

## UI interactions matter.

UI displacement when keyboard it's active

![alt text](src/assets/images/documentation/I1.gif)

Card selector for services selection

![alt text](src/assets/images/documentation/I2.gif)

Animations when card controls are action and control per card

![alt text](src/assets/images/documentation/I3.gif)

## Extras:

BottomTab navigation.

![alt text](src/assets/images/documentation/E1.gif)

Card control page.

![alt text](src/assets/images/documentation/E2.gif)

## Aditional Features!

Card slider for services selection

![alt text](src/assets/images/documentation/I2.gif)

Cards selector with UI and state updates on displayed info

![alt text](src/assets/images/documentation/EE1.gif)

Transactions page

![alt text](src/assets/images/documentation/EE2.gif)

## Used Libraries

**_"@react-native-community/masked-view":_**
To handle background gradients on icons and texts.

**_"@react-navigation":_**
For all the screen navigation.

**_"react-native-linear-gradient":_**
To handle all the gradients.

**_"react-native-reanimated":_**
For UI animations.

**_"react-native-reanimated-carousel":_**
To display a nice and smooth carousel for cards selection

**_"react-native-vector-icons"_**: For all the icons used on the application

# Original requirements

- Implement the following screens: [Figma](https://www.figma.com/file/GQccaSiW6oFKzdCh6mmdGx/Sample-screens-for-dev-interview?type=design&node-id=1%3A4&mode=dev)
- IOS is the target for this exercise.
- Think about component reusability.

- UI interactions matter.

Extras:

- BottomTab navigation.
- Card control page.

Notes:

- Fork this project and share the link of the repository once you finish the excersie.

## Step 1: Install dependencies

First, you will need to install the project dependencies.

```bash
# using npm
npm install —legacy-peer-deps
```

## Step 2: Install IOS Dependencies

- Delete Podfile.loc

- Run the following

```bash
# using npm
cd ios
pod install
```

## Step 3: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start
```

## Step 4: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _iOS_ app:

### For iOS

```bash
# using npm
npm run ios
```

If everything is set up _correctly_, you should see your new app running in your _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.
