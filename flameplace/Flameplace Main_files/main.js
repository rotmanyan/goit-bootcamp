function initAccordion(accordionElem) {
    function handlePanelClick(event) {
        showPanel(event.currentTarget);
    }

    function showPanel(panel) {
        var expandedPanel = accordionElem.querySelector(".open");
        if (expandedPanel) {
            expandedPanel.classList.remove("open");
        }
        panel.classList.add("open");
    }

    if(document.querySelector(".accordion") != null) {
        if(accordionElem != null) {
            var allPanelElems = accordionElem.querySelectorAll(".accordion");
        }
    } else {
        allPanelElems = false;
    }
    if(allPanelElems) {
        for (var i = 0, len = allPanelElems.length; i < len; i++) {
            allPanelElems[i].addEventListener("click", handlePanelClick);
        }
        showPanel(allPanelElems[0]);
    }
}
// if (document.querySelector(".vertical-tabs__content") != null) {
//     initAccordion(document.querySelector(".vertical-tabs__content"));
// }

if (document.querySelector(".accordion-l") != null) {
    initAccordion(document.querySelector(".accordion-l"));
}

var toClose = false;

function toggle(e) {
    e.stopPropagation();
    var btn = this;
    var menu = btn.querySelector(".dropdown-list");

    while (menu && menu.nodeType != 1) {
        menu = menu.nextSibling
    }
    if (!menu) return;
    if (menu.style.display !== 'block') {
        menu.style.display = 'block';
        if (toClose) toClose.style.display = "none";
        a = document.querySelector("#m-menu");
        a.classList.remove('open');
        toClose = menu;
    } else {
        menu.style.display = 'none';
        a = document.querySelector("#m-menu");
        a.classList.remove('open');
        toClose = false;
    }
}

function toggleMenu(e) {
    e.stopPropagation();
    var a = document.querySelector("#m-menu");
    var menu = a.querySelector(".dropdown-list");

    while (menu && menu.nodeType != 1) {
        menu = menu.nextSibling
    }
    if (!menu) return;
    if (menu.style.display !== 'block') {
        a.classList.add('open');
        menu.style.display = 'block';
        if (toClose) toClose.style.display = "none";
        toClose = menu;
    } else {
        a.classList.remove('open');
        menu.style.display = 'none';
        toClose = false;
    }
}

function toggleSidebar(e) {
    e.stopPropagation();
    var sidebar = document.querySelector(".sidebar-col");
    var gallery = document.querySelector(".gallery-col");


    var sidebarO = false;
    if ((" " + sidebar.className + " ").replace(/[\n\t]/g, " ").indexOf(" s-close ") > -1) {
        sidebarO = true;
    }
    if (sidebarO) {
        sidebar.classList.remove('s-close');
        gallery.classList.remove('s-close');
        initGenerateGrid();
    } else {
        sidebar.classList.add('s-close');
        gallery.classList.add('s-close');
        initGenerateGrid();
    }
}

function closeAll() {
    toClose.style.display = 'none';
    var menu = document.querySelectorAll(".dropdown-list");
    menu.forEach(function (value) {
        value.style.display = 'none';
    });
    a = document.querySelector("#m-menu");
    a.classList.remove('open');
}

window.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown").forEach(function (btn) {
        btn.addEventListener("click", toggle, true);
    });
});

window.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector("#m-menu");
    menu.addEventListener("click", toggleMenu, true);
});

window.addEventListener("DOMContentLoaded", function () {
    var menuSidebar = document.querySelector(".minimize .btn-menu");
    menuSidebar.addEventListener("click", toggleSidebar, true);
});

window.addEventListener("DOMContentLoaded", function () {
    var menuSidebar = document.querySelector(".btn-sidebar");
    menuSidebar.addEventListener("click", toggleSidebar, true);
});

window.onclick = function (event) {
    if (toClose) {
        closeAll.call(event.target);
    }
};

function indexInParent(node) {
    var children = node.parentNode.childNodes;
    var num = 0;
    for (var i=0; i<children.length; i++) {
        if (children[i]===node) return num;
        if (children[i].nodeType===1) num++;
    }
    return -1;
}

var grid = document.querySelector("[data-grid]");
var gridItems = grid.querySelectorAll("[data-grid-item]");
var gridType = gridItems[0].getAttribute("data-grid-item");

if(document.querySelectorAll(".row-gallery-header") !== null) {
    var gridHeader = document.querySelectorAll(".row-gallery-header");
    headerForGrid = [];
    gridHeader.forEach(function (value) {
        headerForGrid[indexInParent(value)] = value.outerHTML;
    });
}

function generateGrid(grid, gridItems, numsRow, numsCol) {
    var i = 0;
    var row = [];
    var rowClass = grid.querySelector("[data-grid-row]").getAttribute("data-grid-row");
    if (rowClass === 'brands') {
        rowClassAdd = 'designers';
    } else if (rowClass === 'favorites' || rowClass === 'gallerys') {
        rowClassAdd = 'gallery';
    } else if (rowClass === 'showrooms') {
        rowClass = 'showroomss';
        rowClassAdd = 'gallery';
    } else {
        rowClassAdd = 'designers';
    }
    if (typeof headerForGrid !== 'undefined' && headerForGrid.length > 0) {
        numsRow += headerForGrid.length;
    }
    for (var r = 0; r < numsRow; r++) {
        row[r] = "<div class='row-" + rowClassAdd + "' data-grid-row='" + rowClass.substring(0, rowClass.length - 1) + "'>";
        if (typeof headerForGrid !== 'undefined' && headerForGrid[r]) {
            row[r] = headerForGrid[r];
        }
        for (var c = 0; c < numsCol; c++) {
            row[r] += '' + gridItems[i++].outerHTML;
        }
        row[r] += '</div>';
    }
    var rows = row.join('');
    $gallery = document.querySelector('[data-grid] #gallery');
    $gallery.innerHTML = rows;
}

function getParamsWindow(){
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;
    return {
        width: x,
        height: y
    }
}

function initGenerateGrid() {
    var sidebar = false;
    if ((" " + grid.className + " ").replace(/[\n\t]/g, " ").indexOf(" s-close ") > -1) {
        sidebar = true;
    }

    var params = getParamsWindow();

    if(gridType === 'brand') {
        if (params.width >= 320 && params.width <= 325) {
            generateGrid(grid, gridItems, 4, 3);
        } else if (params.width <= 480 && params.width > 325) {
            if (sidebar) {
                generateGrid(grid, gridItems, 3, 2);
            } else {
                generateGrid(grid, gridItems, 3, 2);
            }
        } else if (params.width <= 768 && params.width > 480) {
            if (sidebar) {
                generateGrid(grid, gridItems, 4, 3);
            } else {
                generateGrid(grid, gridItems, 4, 1);
            }
        } else if (params.width > 1366 && params.width < 1659) {
            generateGrid(grid, gridItems, 3, 4);
        } else if (params.width > 1660) {
            generateGrid(grid, gridItems, 3, 4);
        }
    } else if(gridType === 'designer') {
        if (params.width >= 320 && params.width <= 325) {
            generateGrid(grid, gridItems, 3, 3);
        } else if (params.width <= 480 && params.width > 325) {
            if (sidebar) {
                generateGrid(grid, gridItems, 3, 2);
            } else {
                generateGrid(grid, gridItems, 3, 1);
            }
        } else if (params.width <= 768 && params.width > 480) {
            if (sidebar) {
                generateGrid(grid, gridItems, 3, 2);
            } else {
                generateGrid(grid, gridItems, 3, 1);
            }
        } else if (params.width > 1366 && params.width < 1659) {
            generateGrid(grid, gridItems, 3, 4);
        } else if (params.width > 1660) {
            generateGrid(grid, gridItems, 3, 4);
        }
    } else {
        if (params.width >= 320 && params.width <= 325) {
            generateGrid(grid, gridItems, 3, 3);
        } else if (params.width <= 768 && params.width > 325) {
            if (sidebar) {
                generateGrid(grid, gridItems, 3, 2);
            } else {
                generateGrid(grid, gridItems, 3, 1);
            }
        } else if (params.width > 1366 && params.width < 1659) {
            generateGrid(grid, gridItems, 3, 3);
        } else if (params.width > 1660) {
            generateGrid(grid, gridItems, 3, 3);
        }
    }
}

initGenerateGrid();

window.onresize = function () {
    var sidebar = false;
    if ((" " + grid.className + " ").replace(/[\n\t]/g, " ").indexOf(" s-close ") > -1) {
        sidebar = true;
    }

    var params = getParamsWindow();
    if(gridType === 'brand') {
        if (params.width >= 320 && params.width <= 325) {
            generateGrid(grid, gridItems, 4, 3);
        } else if (params.width <= 480 && params.width > 325) {
            if (sidebar) {
                generateGrid(grid, gridItems, 3, 2);
            } else {
                generateGrid(grid, gridItems, 3, 2);
            }
        } else if (params.width <= 768 && params.width > 480) {
            if (sidebar) {
                generateGrid(grid, gridItems, 4, 3);
            } else {
                generateGrid(grid, gridItems, 4, 1);
            }
        } else if (params.width > 1366 && params.width < 1659) {
            generateGrid(grid, gridItems, 3, 4);
        } else if (params.width > 1660) {
            generateGrid(grid, gridItems, 3, 4);
        }
    } else if(gridType === 'designer') {
        if (params.width >= 320 && params.width <= 325) {
            generateGrid(grid, gridItems, 3, 4);
        } else if (params.width <= 480 && params.width > 325) {
            if (sidebar) {
                generateGrid(grid, gridItems, 3, 2);
            } else {
                generateGrid(grid, gridItems, 3, 1);
            }
        } else if (params.width <= 768 && params.width > 480) {
            if (sidebar) {
                generateGrid(grid, gridItems, 3, 2);
            } else {
                generateGrid(grid, gridItems, 3, 1);
            }
        } else if (params.width > 1366 && params.width < 1659) {
            generateGrid(grid, gridItems, 3, 4);
        } else if (params.width > 1660) {
            generateGrid(grid, gridItems, 3, 4);
        }
    } else {
        if (params.width >= 320 && params.width <= 325) {
            generateGrid(grid, gridItems, 3, 3);
        } else if (params.width <= 768 && params.width > 325) {
            if (sidebar) {
                generateGrid(grid, gridItems, 3, 2);
            } else {
                generateGrid(grid, gridItems, 3, 1);
            }
        } else if (params.width > 1366 && params.width < 1659) {
            generateGrid(grid, gridItems, 3, 3);
        } else if (params.width > 1660) {
            generateGrid(grid, gridItems, 3, 3);
        }
    }
};

function getPosition(el) {
    var xPos = 0;
    var yPos = 0;
    while (el) {
        if (el.tagName === "BODY") {
            var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
            var yScroll = el.scrollTop || document.documentElement.scrollTop;
            xPos += (el.offsetLeft - xScroll + el.clientLeft);
            yPos += (el.offsetTop - yScroll + el.clientTop);
        } else {
            xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPos += (el.offsetTop - el.scrollTop + el.clientTop);
        }
        el = el.offsetParent;
    }
    return {
        left: xPos,
        top: yPos
    };
}

function getSizeEl(el) {
    var width = el.offsetWidth;
    var height = el.offsetHeight;
    return {
        width : width,
        height: height
    }
}

function createRange(posEl, sizeEl, position, value) {
    var zoneElTopLeft = {
        x: posEl.left,
        y: posEl.top
    };
    var zoneElTopRight = {
        x: posEl.left + sizeEl.width,
        y: posEl.top
    };
    var zoneElBottomLeft = {
        x: posEl.left,
        y: posEl.top + sizeEl.height
    };
    var zoneElBottomRight = {
        x: posEl.left + sizeEl.width,
        y: posEl.top + sizeEl.height
    };

    if (position === 'right') {
        zoneElTopLeft.x = sizeEl.width;
        zoneElTopRight.x += value;
        zoneElBottomLeft.x = sizeEl.width;
        zoneElBottomRight.x += value;
    }

    return {
        topLeft: zoneElTopLeft,
        topRight: zoneElTopRight,
        bottomLeft: zoneElBottomLeft,
        bottomRight: zoneElBottomRight
    }
}

function onMouseUpdate(e) {
    x = e.pageX;
    y = e.pageY;
    var btnSidebar = document.querySelector(".btn-sidebar");
    var sidebar = false;
    if ((" " + grid.className + " ").replace(/[\n\t]/g, " ").indexOf(" s-close ") > -1) {
        sidebar = true;
    }
    posEl = getPosition(document.querySelector(".sidebar-col"));
    sizeEl = getSizeEl(document.querySelector(".sidebar-col"));
    var range = createRange(posEl, sizeEl, 'right', 150);
    if ((x >= range.topLeft.x && x <= range.bottomRight.x) && (y >= range.topLeft.y && y <= range.bottomRight.y)) {
        if (!sidebar) {
            btnSidebar.style.display = "block";
        }
        posEl = getPosition(document.querySelector(".sidebar-col"));
        sizeEl = getSizeEl(document.querySelector(".sidebar-col"));
    } else {
        btnSidebar.style.display = "none";
        posEl = getPosition(document.querySelector(".sidebar-col"));
        sizeEl = getSizeEl(document.querySelector(".sidebar-col"));
    }
}

posEl = getPosition(document.querySelector(".sidebar-col"));
sizeEl = getSizeEl(document.querySelector(".sidebar-col"));

var x = null;
var y = null;

document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);