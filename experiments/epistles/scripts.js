async function get_data() {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
}

function chartify(data, senders, by) {
  let chart = {"labels": [], "series": [[]]};

  if (by === "sender") {
    chart["series"].push([]);
  }

  for (category in data) {
    chart["labels"].push(category);
    if (by === "sender") {
      for (let i = 0; i < senders.length; i++) {
        chart["series"][i].push(data[category][senders[i]]);
      }
    } else if (by === "share") {
      chart["series"][0].push(data[category]["share"]);
    }
  }

  return chart;
}

function populate_table(table, data) {
  console.log(data);
  for (category in data) {
    let row = document.createElement("tr");
    row.appendChild(document.createElement("td")).appendChild(document.createTextNode(category));
    for (key in data[category]) {
      row.appendChild(document.createElement("td")).appendChild(document.createTextNode(data[category][key]));
    }
    table.append(row);
  }
}

get_data().then(data => {
  new Chartist.Line("#byMonth", chartify(data["messages_by_month"], data["senders"], "sender"));

  new Chartist.Line("#march", chartify(data["messages_by_date"]["2019-03"], data["senders"], "sender"));

  new Chartist.Bar("#punctuation", chartify(data["top_punctuation"], data["senders"], "share"), {
    horizontalBars: true,
    reverseData: true,
    axisX: {
      type: Chartist.AutoScaleAxis,
      onlyInteger: true,
      labelInterpolationFnc: function(value, index) {
        if (value === -1) {
          return "-1\n(exclusively mine)";
        } else if (value === 0) {
          return "0\n(equally shared)";
        } else if (value === 1) {
          return "1\n(exclusively theirs)";
        }
      }
    },
    plugins: [
      // ctPointLabels({
      //   textAnchor: "middle"
      // })
      // Chartist.plugins.ctAxisTitle({
      //   axisX: {
      //     axisTitle: "Share",
      //     axisClass: "ct-axis-title"
      //   },
      //   axisY: {
      //     axisTitle: "Punctuation",
      //     axisClass: "ct-axis-title"
      //   }
      // })
    ]
  });

  populate_table(document.getElementById("top_words"), data["top_words"]["all"]);

  populate_table(document.getElementById("top_punctuation"), data["top_punctuation"]);
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    var yLabels = document.querySelectorAll("#punctuation foreignObject[x='10']");
    yLabels.forEach((yLabel, i) => {
      console.log(i);
      if (i > 25) {
        var bar = document.querySelectorAll(".ct-bar")[i];
        var x = bar.getBBox().x;
        var w = bar.getBBox().width;
        console.log(x + w);
        yLabel.setAttribute("x", x + w + 10);
      } else {
        var bar = document.querySelectorAll(".ct-bar")[i];
        var x = bar.getBBox().x;
        var w = bar.getBBox().width;
        console.log(x + w);
        yLabel.setAttribute("x", x - 40);
      }
    });

    document.querySelector("#punctuation foreignObject:last-of-type").setAttribute("width", "600");
    document.querySelector("#punctuation foreignObject:last-of-type span").style.width = "600px";

    var meCat = document.createElement("span");
    meCat.append(document.createTextNode("my punctuation"));
    meCat.id = "meCat";
    meCat.classList.add("cat");
    var themCat = document.createElement("span");
    themCat.append(document.createTextNode("their punctuation"));
    themCat.id = "themCat";
    themCat.classList.add("cat");
    var punctuation = document.getElementById("punctuation");
    punctuation.append(meCat);
    punctuation.append(themCat);

    var legend = document.createElement("div");
    legend.id = "puncLegend";
    var punc = document.createElement("span");
    punc.append(document.createTextNode("punctuation"));
    punc.classList.add("legendItem");
    punc.classList.add("punctuation");
    var emoticon = document.createElement("span");
    emoticon.append(document.createTextNode("emoticon"));
    emoticon.classList.add("legendItem");
    emoticon.classList.add("emoticon");
    var emoji = document.createElement("span");
    emoji.append(document.createTextNode("emoji"));
    emoji.classList.add("legendItem");
    emoji.classList.add("emoji");
    legend.append(punc);
    legend.append(emoticon);
    legend.append(emoji);
    punctuation.append(legend);
  }, 500);
});

let charts = document.getElementsByClassName("hasLegend");
for (let chart of charts) {
  let legend = document.createElement("div");
  legend.classList.add("legend");
  let series = ["them", "me"]
  for (let i = 0; i < series.length; i++) {
    let label = document.createElement("span");
    label.append(document.createTextNode(series[i]));
    label.classList.add("series", "series" + (i + 1).toString());
    legend.append(label);
  }
  chart.append(legend);
}