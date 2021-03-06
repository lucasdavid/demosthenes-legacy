﻿'use strict';

app.controller('CoursesController',
    ['$http', '$scope', 'Validator', 'resolvedCourses', 'Courses', 'resolvedDepartments',
    function ($http, $scope, Validator, resolvedCourses, Courses, resolvedDepartments) {
        $scope.courses     = resolvedCourses;
        $scope.departments = resolvedDepartments;

        $scope.create = function () {
            Courses.save($scope.newCourse,
            function (course) {
                toastr.success('Course "' + $scope.newCourse.Title + '" saved!', 'Success!');
                $scope.clear();

                $scope.courses.push(course);
                console.log(course);
            },
            function (data) {
                Validator.
                        take(data).
                        toastWarnings().
                        otherwiseToastDefaultError();
                console.log(data);
            });
        }

        $scope.clear = function () {
            $scope.newCourse = { Title: null, Credits: null, DepartmentId: "" }
        }

        $scope.clear();
    }]);