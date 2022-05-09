/* test("sum 2 + 2", () => {
  expect(2 + 2).toBe(4);
});
 */

import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

//spies - espiões = saber se uma função foi chamada
// jest.fn() = função espiã

const createFeedbackSpy = jest.fn();
const senMailSpy = jest.fn();

/* const submitFeedback = new SubmitFeedbackUseCase(
  { create: async () => {} },
  { sendMail: async () => {} }
); */

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: senMailSpy }
);

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "data:image/png;base64,987897987",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(senMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "example comment",
        screenshot: "data:image/png;base64,987897987",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,987897987",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback with an invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "test.jpg",
      })
    ).rejects.toThrow();
  });
});
