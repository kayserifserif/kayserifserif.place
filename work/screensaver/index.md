---
title: Geometric Screensaver
description: A minimalistic and satisfying generative screensaver of animated interlocking geometric shapes.
year: 2015
tags: [code, graphic]
image: /assets/img/screensaver/screensaver.png
layout: article
css: prism.css
js: prism.js
---

<header class="intro">
    <h1 class="title">{{ page.title }}</h1>
    <p class="year">{{ page.year }}</p>
    <p class="subtitle">{{ page.description }}</p>
    <div class="platforms">
        <a href="https://github.com/whykatherine/geometric-screensaver" title="GitHub">GitHub</a>
    </div>
    <figure>
        <iframe src="https://player.vimeo.com/video/237679628" width="640" height="320" allowfullscreen></iframe>
    </figure>
</header>

## Investigation

### Questions

* What is a screensaver?
* What is the purpose of a screensaver?
* What are the benefits of a screensaver?
* What are the disadvantages of a screensaver?
* What makes a screensaver aesthetically pleasing?
* How are screensavers usually created?
* How can Java be used to create a screensaver?
* What are the advantages of using Java to create a screensaver?
* What are the disadvantages of using Java to create a screensaver?

### Existing products

<div>

"Flurry" by Apple

<dl class="swot">
        <div>
            <dt>Strengths</dt>
                <dd>Smooth animations</dd>
                <dd>Many customisation options: color, streams, thickness, speed</dd>
                <dd>Soothing/relaxing effect</dd>
                <dd>Constantly changing</dd>
        </div>
        <div>
            <dt>Opportunities</dt>
                <dd>More interesting or dynamic background</dd>
        </div>
    </dl>
</div>
<div>
    
    "Arabesque" by Apple

<dl class="swot">
        <div>
            <dt>Strengths</dt>
                <dd>Smooth animations</dd>
                <dd>Soothing/relaxing effect</dd>
                <dd>Constantly changing</dd>
                <dd>Regular geometric shapes</dd>
                <dd>Changing colour schemes</dd>
                <dd>Variety of styles</dd>
        </div>
        <div>
            <dt>Opportunities</dt>
                <dd>More interesting or dynamic background</dd>
        </div>
    </dl>
</div>

## Design

### Specifications

* The design will be composed of the basic geometric shapes of circles, triangles, and rectangles.  

My client wants a simple, minimalistic design, which can be achieved by using simple geometric shapes. Additionally, this method will be easier to carry out practically.  
    
* The design will use two to five colours.

The design should have some colour so it looks more visually appealing, but not too many that the design is overwhelming and not cohesive.
    
* The colours used should form a cohesive colour scheme and be pleasing and soothing to look at.

With colour being used in most of the design, if not all, the colours cannot clash heavily, or it will immediately become unappealing and will not be enjoyed by the user.
    
* The design will fill the entire screen.

The screensaver should be immersive and make use of the screen real estate&mdash;if not with movement, then at least with colour or other design elements.
    
* The background will be static and the foreground elements will be animated.

If there is too much animation, the screensaver will feel overwhelming; therefore, it would be much more effective to have the more important elements be more dynamic.
    
* The design will have five or more states of animation that loop infinitely.

It should be dynamic enough to look interesting and keep the user’s attention. Having the animation loop infinitely allows it to look smooth and aesthetically pleasing, and also serves the function of a screensaver, as it will be left on for an indefinite amount of time.
    
* The animation must not be too complex or advance infinitely.

My research has shown that if there are too many elements or animations to be performed, the screensaver may not perform as expected or will exert a major strain on the computer’s resources, which will cause a negative user experience.
    
* The animation should not be too fast or too slow.

If the animation is too fast, the product risks causing strain on the user’s eyes; if it is too slow, it may cause the user to lose interest or find it unappealing. Therefore, the speed of the animation must be of a suitable rate.

### Inspiration

<div class="moodboard">
    <img src="https://cdn.vectorstock.com/i/1000x1000/43/42/geometric-design-vector-524342.jpg" alt="Moodboard 1">
    <img src="http://blog.signalnoise.com/wp-content/uploads/2009/08/i_waldheims3.jpg" alt="Moodboard 2">
    <img src="https://i.pinimg.com/736x/b6/14/33/b61433ec3276065d4dd23c67a1af375f.jpg" alt="Moodboard 3">
    <img src="https://static.colourlovers.com/images/patternDefinitions/12/124/124686.png?1323982501" alt="Moodboard 4">
    <img src="http://images.hellokids.com/_uploads/_tiny_galerie/20150626/geometric-string-art-video_hgv.jpg" alt="Moodboard 5">
</div>

### Ideas

* This design features a dark background with light-coloured overlapping circles in the foreground, arranged in a circle. The number of circles and the size of the shape increases to a certain point (specifically, when the shape reaches or surpasses the limits of the frame), then decreases until the original frame is displayed. There are 20 frames in total. This design has a dynamic sense of movement, with animation happening in three different aspects: the number of circles, the spacing of the circles, and the size of the shape. This engages the user through a sense of dimension and movement.

<img src="/assets/img/screensaver/design-1.gif" alt="Design 1">
    
* This design features a light background with darker-coloured circles in the foreground. There are three layers of depth, each surrounding the lower layer. In each layer, the shape is constructed with three circles arranged equidistant around a circle, overlapping to form a rounded triangle in the center, which surrounds the bottom layers. As for the animation, there are 23 frames in total. The top and bottom layer rotate anti-clockwise, the middle layer rotates clockwise, and each lower layer animates faster than the above layer. This design features a greater sense of depth and complexity, while still maintaining minimalism because of the simple geometry of the shapes.

<img src="/assets/img/screensaver/design-2.gif" alt="Design 2">
    
* This design features a light background with a foreground of randomly placed circles of different sizes, not overlapping. Each circle comprises four concentric rings, coloured in different shades of the same hue. For each frame of the animation, the colours of each ring move outwards, so that it looks like the rings are rippling. There are 4 frames in total, one for each change in the rings. This design is more colourful, with 5 colours instead of 2, and more varied, with randomness instead of symmetry and uniformity.

<img src="/assets/img/screensaver/design-3.gif" alt="Design 3">

### Chosen design

I showed my client each of the designs and asked her to give feedback and judge, based on her own style and needs, which design would be the most suitable. <!-- appendix? -->

For Design 1, my client liked the dynamic sense of movement and the popping colours. For Design 2, she liked the shapes and the “soft” feel of the colours and movement. For Design 3, she liked the arrangement of the shapes, but thought it was less dynamic than the other two designs.

Ultimately, she thought Design 2 was the best fit for her in terms of her own style and needs. However, she thought it could be improved if there was more variation or movement, which I thought was a good point, since the design was quite simple and reserved. Therefore, I developed the design to make it more interesting by replicating it with different geometric shapes as the base. Specifically, I used triangles for the second variation, and squares for the third. With these three variations of the same design, I could have the screensaver display a random one when it starts, which will make the screensaver more interesting to use, and not so repetitive and monotonous.

### Detailed design

Variations

<figure>
    <img src="/assets/img/screensaver/v-circles.png" alt="Variation: circles">
    <figcaption>Circles</figcaption>
</figure>
<figure>
    <img src="/assets/img/screensaver/v-lines.png" alt="Variation: lines">
    <figcaption>Lines</figcaption>
</figure>
<figure>
    <img src="/assets/img/screensaver/v-squares.png" alt="Variation: squares">
    <figcaption>Squares</figcaption>
</figure>

<table class="spec">
    <caption>Colours</caption>
    <tr>
        <th scope="row">Background</th>
        <td><code>#edebe6</code></td>
    </tr>
    <tr>
        <th scope="row">Shapes</th>
        <td><code>#c1d3c4</code></td>
    </tr>
</table>

<table class="spec">
    <caption>Lines</caption>
    <tr>
        <th scope="row">Outer</th>
        <td>40 pt</td>
    </tr>
    <tr>
        <th scope="row">Mid</th>
        <td>15 pt</td>
    </tr>
    <tr>
        <th scope="row">Inner</th>
        <td>5 pt</td>
    </tr>
</table>

<table class="spec">
    <caption>Size</caption>
    <tr>
        <th></th>
        <th scope="col">Outer</th>
        <th scope="col">Mid</th>
        <th scope="col">Inner</th>
    </tr>
    <tr>
        <th scope="row">Circles</th>
        <td>800 px</td>
        <td>300 px</td>
        <td>100 px</td>
    </tr>
    <tr>
        <th scope="row">Triangles</th>
        <td>780 px</td>
        <td>200 px</td>
        <td>50 px</td>
    </tr>
    <tr>
        <th scope="row">Squares</th>
        <td>850 px</td>
        <td>250 px</td>
        <td>50 px</td>
    </tr>
</table>

## Evaluation

### Client feedback analysis

After viewing my product, my client had a very positive reaction and evaluation. She listed four things she thought were interesting about the product. Firstly, the two main colours were soothing and complemented each other well. Secondly, the use of shapes, and, specifically, the regular geometry of each core shape, was very aesthetically pleasing and fit well with the theme of minimalism. Thirdly, she described the movements of the shapes as “gentle” and “smooth”, and said that she liked the way the speed and direction was varied in a pattern. The last comment she made was on the “mesmerising” effect of the design as a whole; she thought that the combination of the first three factors created a very cohesive look and made the screensaver enjoyable and comfortable to look at.

From this feedback, I can assume that, at least from a technical and artistic standpoint, my design itself was quite successful. However, in the context of it being a screensaver and presumably being viewed frequently over a long period of time, I think my client’s impression of minimalism and simplicity might not work in the product’s favour long-term, since it will very likely lose the viewer’s attention and interest. With the medium’s capacity for variation and diversity, I could have extended the product to be even more dynamic and unexpected.

### Target audience survey analysis

A survey was conducted with 17 students in Year 11, who each answered the quantitative questions and offered some qualitative thoughts as well.

Opinions of the aesthetics of the design were extremely positive, with the average rating being 9.22 out of a scale of 10, and with most of the ratings at 8, 9, or 10. The ease of the animation on the eyes was judged to be slightly lower, at 8.78 out of 10, and the ratings for this question were more diverse.

In the third question, some respondents added extra comments on specific aspects of the product. One person described the style as “clean, simple and modern”, and some commented positively on the colour choice, typography, and smooth animation. However, a few people noted that the animation was sometimes “disorientating” or “jarring”. I thought this was a very valid concern. Even without animation, the concept did not quite carry over from ‘circle’ to ‘square’ or ‘triangle’, and the animation in the product did not follow the animation in the design exactly. For example, I did not take rotation into consideration in my design, so the result looked and felt very different, and I don’t think it was entirely successful.

There were also many interesting and creative comments on ways I would be able to improve. The most common one was on colour, and suggested a “wider range” of colours: “different” colour schemes that could be “randomised” “along with the random versions upon startup”. One respondent gave a thoughtful comment on how my product could be extended and built upon quite easily, notably that, “[s]ince all three shapes seem to follow the same movement patterns, it would be cool if the screensaver was able to smoothly transition/morph between them”.

### Improvements

Based on mainly the results of the survey, I think the largest improvement I could make is with the variety and unpredictability of the screensaver. Currently, the screensaver only uses two main colours. If it uses more or different colours, it would be much more dynamic and interesting. This could be achieved by having different colours be selected at random upon startup, either from an preset array of colour combinations, or by using the HSB methods in the Color class to mathematically calculate colours that could work together. Another way could be to have the colours gradually cycle through different hues as the screensaver is running.

Below is an example of how I might be able to implement this feature using the HSB methods. I would first pick a random hue for the center of the background radial gradient, with a set saturation and brightness. From the center colour, I would generate a darker variant for the outside of the gradient, and an off-white variant for the text colour. For the shape colour, I would add a set amount to the hue property of the center colour, then adjust the other properties to help it stand out.

<pre><code class="language-java">// gradient
float[] center = {(float)Math.random(), 0.1f, 0.8f};
Color gradientLight = Color.getHSBColor(
center[0], center[1], center[2]);
Color gradientDark = Color.getHSBColor(
center[0], center[1] + 0.1f, center[2] - 0.03f);
gradientColors = new Color[]{gradientLight, gradientDark};
gradient = new RadialGradientPaint(
frameWidth/2, frameHeight/2, frameWidth/2,
gradientDistro, gradientColors);
// text
    textColor = Color.getHSBColor(center[0], 0.02f, 0.95f);
// shape
float[] shape = {
    center[0] - 0.3f, center[1] - 0.05f, center[2] + 0.1f};
for(int i = 1; i &lt; 3; i++) {
    if(shape[i] &gt; 1f) shape[i] = 1f;
    if(shape[i] &lt; 0f) shape[i] = 0f;
}
shapeColor = Color.getHSBColor(shape[0], shape[1], shape[2]);</code></pre>
    
Other improvements to the solution could include one respondent’s suggestion of transitions between shapes, since they have approximately the same positions and movements. This would be a good change because it would introduce more variation while still keeping with the minimalistic style.

### Impact of solution

My design brief stated that my client wanted an aesthetically pleasing and enjoyable screensaver for a more relaxing and inspiring working environment, specifically tailored to the style and look that she likes. From each component of my evaluation, I have found that my solution is an effective solution to the problem, because it is minimalistic and visually engaging. This improves the client’s situation by providing a screensaver specifically designed and adjusted to her particular taste, which she can use to help her study better. As for the potential negative effects of the product, the animation of the shapes may be somewhat disorientating or jarring, depending on the user, how the screensaver is viewed, how often it is viewed, and so on. Another factor might be the lack of variation in the design, which may result in the client losing interest in the product after a period of time. However, I think that overall, the solution was presented well and works as an effective response to the client’s particular problem.