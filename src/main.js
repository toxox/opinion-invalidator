walk(document.body);

function walk(node)
{
  // Stole this function from cloud-to-butt extension.
  // And that guy stole it from here: http://is.gd/mwZp7E

  var child, next;

  switch ( node.nodeType )
  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while ( child )
      {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode)
{
  var v = textNode.nodeValue;

  v = v.replace(/IMHO|ІМХО|ИМХО/gi, "DISREGARD THAT, I SUCK COCKS");

  textNode.nodeValue = v;
}