const BASE_URL = import.meta.env.VITE_API;
//1 get all routines
export const getPublicRoutines = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching routines:", error);
    throw error;
  }
};
//2 create a new workout with log in
export const createRoutine = async (
  name,
  globalThis,
  isPublic = true,
  token,
) => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        goal,
        isPublic,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error creating routine:", error);
    throw error;
  }
};
//3 set activity to a routine with auth needed
export const attachActivityToRoutine = async (
  routineId,
  activityId,
  count,
  duration,
  token,
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/routines/${routineId}/activities`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          activityId,
          count: Number(count),
          duration: Number(duration),
        }),
      },
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error attaching activity to routine:", error);
    throw error;
  }
};
//4 delete a work out with auth
export const deleteRoutine = async (routineId, token) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error deleting routine:", error);
    throw error;
  }
};
