---
title: Epistles
description: Initial explorations of the data story of a friendship.
date: 202003
tags: [code, data]
image: /assets/img/epistles/punctuation.png
image-square: /assets/img/epistles/punctuation-square.png
image-alt: Bar chart of punctuation used by each person, colour-coded by type of punctuation.
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Epistles—Data Story of a Friendship</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css">
  <link href="https://fonts.googleapis.com/css?family=PT+Mono|Work+Sans:400,400i,600,600i&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <section class="intro">
      <h1 class="intro-heading">Epistles</h1>
      <p class="intro-subtitle subtitle">Initial Explorations of the Data Story of a Friendship</p>
      <p class="intro-dates">July 27, 2018 – March 22, 2020</p>
    </section>
    <section class="dict_wrapper">
      <div class="dict">
        <p><span style="font-size:1.2em">epistolary</span> <span style="color:#999">| ɪˈpɪst(ə)ˌləri |</span></p>
        <p>adjective</p>
        <p style="text-indent:1em">(of a literary work) in the form of letters: <span style="font-style:italic;color:#999">an epistolary novel.</span></p>
        <p style="text-indent:1em">• <span style="font-style:italic;color:#999">literary</span> relating to the writing of letters.</p>
        <p style="font-size:.8em;color:#999;border-bottom:1px solid currentColor;padding-bottom:.5em">ORIGIN</p>
        <p style="text-indent:1em">mid 17th century: from French <span style="font-weight:bold;font-style:italic">épistolaire</span> or Latin <span style="font-weight:bold;font-style:italic">epistolaris</span>, from <span style="font-weight:bold;font-style:italic">epistola</span> (see <span style="font-weight:bold">epistle</span>).</p>
      </div>
    </section>
    <section class="article_wrapper">
      <h2>a two-way street</h2>
      <p>they sent more messages than i did, but i sent longer messages on average than they did.</p>
      <table>
        <thead>
          <td></td>
          <td>Total messages sent</td>
          <td>Average characters per message</td>
        </thead>
        <tbody>
          <tr>
            <td>Me</td>
            <td>81610</td>
            <td class="cell_highlight">26.20</td>
          </tr>
          <tr>
            <td>Them</td>
            <td class="cell_highlight">90735</td>
            <td>20.54</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="article_wrapper">
      <h2>what are we talking about; how do we say it?</h2>
      <h3 class="subtitle">some selections from our word frequency table</h3>
      <p>removing some stopwords, such as [on at with just do about this there if can not have be the to it and a that is so of in are for was but]</p>
      <table id="top_words">
        <thead>
          <td>word</td>
          <td>count</td>
          <td>percentage of all words</td>
        </thead>
        <tbody></tbody>
      </table>
    </section>
    <section class="article_wrapper">
      <h2>over time</h2>
      <h3 class="subtitle">messages sent by each of us by month</h3>
      <div class="ct-chart ct-golden-section hasLegend" id="byMonth"></div>
      <p>kinda curious about that last march</p>
      <h3 class="subtitle">messages sent by each of us in march 2019</h3>
      <div class="ct-chart ct-golden-section hasLegend" id="march"></div>
      <p>wonder what happened on march 26!</p>
    </section>
    <section class="article_wrapper">
      <h2>punctuation</h2>
      <h3 class="subtitle">top 50 punctuation (non-word character groups)</h3>
      <table id="top_punctuation">
        <thead>
          <td>punctuation</td>
          <td>total</td>
          <td>them</td>
          <td>me</td>
          <td>share</td>
        </thead>
        <tbody>
          <!-- <tr><td>'</td><td>15615</td><td>14527</td><td>30142</td></tr>
          <tr><td>?</td><td>6665</td><td>7194</td><td>13859</td></tr>
          <tr><td>!</td><td>6211</td><td>5750</td><td>11961</td></tr>
          <tr><td>:)</td><td>3548</td><td>3712</td><td>7260</td></tr>
          <tr><td>,</td><td>2357</td><td>3162</td><td>5519</td></tr>
          <tr><td>:))</td><td>1579</td><td>2305</td><td>3884</td></tr>
          <tr><td>!!</td><td>1345</td><td>1868</td><td>3213</td></tr>
          <tr><td>.</td><td>1757</td><td>709</td><td>2466</td></tr>
          <tr><td>:</td><td>883</td><td>1165</td><td>2048</td></tr>
          <tr><td>/</td><td>659</td><td>544</td><td>1203</td></tr>
          <tr><td>-</td><td>519</td><td>544</td><td>1063</td></tr>
          <tr><td>:)))</td><td>295</td><td>598</td><td>893</td></tr>
          <tr><td>(</td><td>582</td><td>277</td><td>859</td></tr>
          <tr><td>^^</td><td>78</td><td>776</td><td>854</td></tr>
          <tr><td>!!!</td><td>253</td><td>590</td><td>843</td></tr>
          <tr><td>:(</td><td>285</td><td>452</td><td>737</td></tr>
          <tr><td>)</td><td>496</td><td>239</td><td>735</td></tr>
          <tr><td>"</td><td>452</td><td>264</td><td>716</td></tr>
          <tr><td>:/</td><td>532</td><td>180</td><td>712</td></tr>
          <tr><td>…</td><td>366</td><td>331</td><td>697</td></tr>
          <tr><td>??</td><td>257</td><td>284</td><td>541</td></tr>
          <tr><td>...</td><td>256</td><td>253</td><td>509</td></tr>
          <tr><td>*</td><td>303</td><td>108</td><td>411</td></tr>
          <tr><td>’</td><td>316</td><td>49</td><td>365</td></tr>
          <tr><td>:))))</td><td>70</td><td>293</td><td>363</td></tr>
          <tr><td>:|</td><td>143</td><td>210</td><td>353</td></tr>
          <tr><td>:((</td><td>107</td><td>229</td><td>336</td></tr>
          <tr><td>://</td><td>98</td><td>233</td><td>331</td></tr>
          <tr><td>..</td><td>140</td><td>167</td><td>307</td></tr>
          <tr><td>+</td><td>160</td><td>128</td><td>288</td></tr>
          <tr><td>😊</td><td>257</td><td>22</td><td>279</td></tr>
          <tr><td>$</td><td>93</td><td>120</td><td>213</td></tr>
          <tr><td>()</td><td>117</td><td>90</td><td>207</td></tr>
          <tr><td>???</td><td>39</td><td>155</td><td>194</td></tr>
          <tr><td>\n</td><td>102</td><td>77</td><td>179</td></tr>
          <tr><td>!!!!</td><td>44</td><td>128</td><td>172</td></tr>
          <tr><td>""</td><td>93</td><td>75</td><td>168</td></tr>
          <tr><td>:)))))</td><td>31</td><td>117</td><td>148</td></tr>
          <tr><td>;</td><td>72</td><td>70</td><td>142</td></tr>
          <tr><td>😎</td><td>57</td><td>68</td><td>125</td></tr>
          <tr><td>:///</td><td>44</td><td>69</td><td>113</td></tr>
          <tr><td>:<</td><td>37</td><td>73</td><td>110</td></tr>
          <tr><td><</td><td>57</td><td>52</td><td>109</td></tr>
          <tr><td>^</td><td>50</td><td>59</td><td>109</td></tr>
          <tr><td>:')</td><td>100</td><td>6</td><td>106</td></tr>
          <tr><td>=</td><td>65</td><td>39</td><td>104</td></tr>
          <tr><td>😌</td><td>70</td><td>33</td><td>103</td></tr>
          <tr><td>!!!!!</td><td>21</td><td>78</td><td>99</td></tr>
          <tr><td>&</td><td>70</td><td>17</td><td>87</td></tr>
          <tr><td>😊😊</td><td>60</td><td>19</td><td>79</td></tr> -->
        </tbody>
      </table>
      <h3 class="subtitle">share of punctuation use</h3>
      <p>punctuation use ranked by exclusivity to me vs them</p>
      <div class="ct-chart ct-golden-section" id="punctuation"></div>
    </section>
  </main>
  <!-- scripts -->
  <script src="https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
  <script src="https://raw.githubusercontent.com/alexstanbury/chartist-plugin-axistitle/master/src/scripts/chartist-plugin-axistitle.js" type="javascript"></script>
  <script src="scripts.js"></script>
</body>
</html>