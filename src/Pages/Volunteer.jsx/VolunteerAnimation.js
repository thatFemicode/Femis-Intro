import gsap from "gsap";
const VolunteerAnimation = (node1, node2, node3, node4, node5, node6) => {
  let tl = gsap.timeline();
  tl.to(node6, { duration: 0.5, opacity: 1 })
    .from(node1, {
      opacity: 0,
      y: 60,
      duration: 1,
    })
    .from(node2, {
      duration: 1,
      y: 20,
      skewX: 20,
      opacity: 0,
      autoAlpha: 1,
      stagger: 0.2,
      ease: "power2.out",
    })
    .from(node3, {
      duration: 1,
      y: 20,
      skewX: 20,
      opacity: 0,
      autoAlpha: 1,
      stagger: 0.2,
      ease: "power2.out",
    })
    .from([node5, node4], {
      opacity: 0,
      // y: 40,
      duration: 2,
      scale: 1.4,
      ease: "power2.out",
      stagger: {
        amount: 1,
      },
    });
};
export default VolunteerAnimation;
