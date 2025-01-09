import $ from "jquery";

console.log($);
class Questions {
  constructor() {
    this.events();
  }

  events() {
    $(".submit-comment").on("click", this.create);
  }

  //methods will go here
  create(event) {
    var acfFields = {
      name: $(".name").val(),
      email: $(".email").val(),
      phone_number: $(".phone").val(),
      reason: $(".reason").val(),
      questions: $(".comment").val(),
    };

    const newComment = {
      title: $(".name").val(),
      status: "publish",
      acf: acfFields,
    };

    event.preventDefault();
    console.log("Payload being sent:", newComment);
    $.ajax({
      url: mirageSchoolThemeData.root_url + "/wp-json/wp/v2/questions/",
      type: "POST",
      data: JSON.stringify(newComment),
      contentType: "application/json",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("X-WP-Nonce", mirageSchoolThemeData.nonce);
      },
      success: (response) => {
        console.log(acfFields);
        $(".name, .email, .phone, .reason, .comment").val("");
        $(".alert").addClass("active");
        console.log("Congrats");
        console.log(response);
      },
      error: (response) => {
        console.log("Failed");
        console.log(response);
      },
    });
  }
}

export default Questions;
