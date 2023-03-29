namespace L02_Load {
  document.addEventListener("load", handleLoad);

  function handleLoad(_event: Event): void {
      console.log(_event);
  }
}
namespace L02_Load {
  window.addEventListener("load", handleLoad);

  function handleLoad(_event: Event): void {
      console.log(_event);
  }
}