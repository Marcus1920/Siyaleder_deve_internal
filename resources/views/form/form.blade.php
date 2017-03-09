
@extends('master')

@section('content')
            <!-- Modal Default -->
            <h1>form</h1>
            <button type="button" name="button" id="presa">show up</button>



            <form class="" action="" method="post">

              <div class="row">
                <div class="col-sm-6">

              <div class="input-group">

              <input type="text" name="fname"  class="form-control"  placeholder="fname"  id="fname">
            </div><br>
                <div class="input-group">
              <input type="text" name="lane" class="form-control"  placeholder="lname"  id="">
            </div><br>
              <div class="input-group">
              <input type="text" name="place" class="form-control"  placeholder="age"  id="">
            </div><br>
              <div class="input-group">
              <input type="text" name="fname" class="form-control"  placeholder=""  id="">
            </div><br>
              <div class="input-group">
              <input type="text" name="lane" class="form-control"  placeholder=""  id="">
            </div><br>
              <div class="input-group">
              <input type="text" name="place" class="form-control"  placeholder=""  id="">
            </div>

            </div>

          </pre>
            </form>





            <div class="modal fade modalCase modal-blue" id="modalForm" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">


                            <h4 class="modal-title" id='depTitle'>Case details</h4>

                        </div>
                        <div class="row">
                          <div class="col-md-6">

                            <ul class="nav nav-pills">
                              <li role="presentation" class="active"><a href="#">Home</a></li>
                              <li role="presentation"><a href="#">Profile</a></li>
                              <li role="presentation"><a href="#">Messages</a></li>
                            </ul>


                            <div class="row">
                              <div class="col-lg-6">
                                <div class="input-group">
                                  <span class="input-group-btn">
                                    <button class="btn btn-default" type="button">Go!</button>
                                  </span>
                                  <input type="text" class="form-control" placeholder="Search for...">
                                </div><!-- /input-group -->
                              </div><!-- /.col-lg-6 -->
                              <div class="col-lg-6">
                                <div class="input-group">
                                  <input type="text" class="form-control" placeholder="Search for...">
                                  <span class="input-group-btn">
                                    <button class="btn btn-default" type="button">Go!</button>
                                  </span>
                                </div><!-- /input-group -->
                              </div><!-- /.col-lg-6 -->
                            </div><!-- /.row -->



                                  </div>


                                        </div>





                        </div><!-- End Tile Div -->

                        </div>
                      </div>
<script>

$(document).ready(function(){




 $('#presa').click(function(){


var  fname=$('#fname').val();
alert (fname) ;

$('#modalForm').modal('show');

 });

});

</script>
@endsection
